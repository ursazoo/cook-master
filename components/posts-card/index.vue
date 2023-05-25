<template>
  <n-drawer
    v-model:show="mainStore.isShowPostsCard"
    placement="bottom"
    default-height="80vh"
  >
    <n-drawer-content title="可选菜谱">
      <n-collapse :accordion="true">
        <n-collapse-item v-for="(post, key) in mainStore.posts" :key="key" :title="post.title" :name="key">
          <div v-html="content"></div>
          <template #header-extra>
            <n-button @click="handleViewPost(post.id)">查看菜谱</n-button>
          </template>
        </n-collapse-item>
      </n-collapse>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { NDrawer, NDrawerContent, NList, NListItem, NThing, NButton, NCollapse, NCollapseItem } from "naive-ui";
import { useMainStore } from "@/stores/main";
import { getPostDetail } from "@/common/apis/post";
const mainStore = useMainStore();

const content = ref('');

async function handleViewPost(id: string) {
  console.log(id);
  const result = await getPostDetail({ id });
  console.log(result);
  content.value = result?.data?.content;
}
</script>

<style scoped lang="scss"></style>
