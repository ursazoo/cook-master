<template>
    <div class="header">
        <div class="title">我们准备做饭了！先来选一下食材吧 🥘</div>
        <div class="operations">
            <NButton @click="mainStore.setIsShowSummaryCard(true)">查看清单</NButton>
        </div>
    </div>
    <div class="home-page-container">
        <ComposeMaterialFilter :primary-material-list="primaryMaterialList" :cookware-list="cookwareList" />
    </div>
    <SummaryCard />
    <PostsCard />
</template>

<script setup lang="ts">
import ComposeMaterialFilter from '@/components/compose-material-filter/index.vue';
import SummaryCard from '@/components/summary-card/index.vue';
import PostsCard from '@/components/posts-card/index.vue';
import { NButton } from 'naive-ui';
import { useMainStore } from '../stores/main/index';

const mainStore = useMainStore();

const { data: primaryMaterialResult } = await useFetch('http://localhost:9000/api/primary-material/structured-list')
const { data: cookwareResult } = await useFetch('http://localhost:9000/api/cookware/structured-list')

const primaryMaterialList = ref((primaryMaterialResult?.value as any)?.data?.list || []);
const cookwareList = ref((cookwareResult?.value as any)?.data?.list || []);

</script>

<style scoped lang="scss">
.header {
    width: 90vw;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 14px;
    }
}

.home-page-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 90vw;
    margin: 20px auto;

    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgb(0 0 0 / 10%);
    padding: 20px;
    box-sizing: border-box;
}
</style>
