// // plugins/pinia.ts
// import { createPinia } from 'pinia'
// import { Plugin } from '@nuxt/types'

// const piniaPlugin: Plugin = (context) => {
//   const pinia = createPinia()
//   context.app.use(pinia)
//   context.$pinia = pinia
// }

// export default piniaPlugin

import { createPinia } from 'pinia'

// 创建全局Pinia实例
const pinia = createPinia()

// 导出全局Pinia实例
export default pinia
