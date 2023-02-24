FROM node:14-alpine as builder

RUN npm install -g pnpm && mkdir -p /home/app/

WORKDIR /home/app/

# 单独分离 package.json，是为了 pnpm 可最大限度利用缓存
COPY package*.json pnpm-lock.yaml ./

# # 单独分离 public/src，是为了避免 ADD . /code 时，因为 Readme/nginx.conf 的更改避免缓存生效
# # 也是为了 npm run build 可最大限度利用缓存

RUN pnpm config set registry https://registry.npmmirror.com && pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# 选择更小体积的基础镜像
FROM nginx:alpine

COPY public/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/app/dist /usr/share/nginx/html

EXPOSE 80
