<template>
  <div class="summary-card-container">
    <NDrawer v-model:show="mainStore.isShowSummaryCard" width="100%" placement="top">
      <NDrawerContent title="食材清单">
        <template #header>
          <div class="drawer-header">
            <div>食材清单</div>
            <div class="operations">
              <NButton class="button" type="primary" :disabled="!store.selected.length" @click="handleSearch()">看看能做什么菜
              </NButton>
              <NButton class="button" type="warning" :disabled="!store.selected.length" @click="handleReset()">重置一下
              </NButton>
            </div>
          </div>
        </template>
        <div class="material-container">
          <div class="secondary-material-container" v-for="select in store.selected" :key="select.secondaryMaterialId">
            <div class="secondary-material-name" v-if="select.list.length">{{ select.secondaryMaterialName }}</div>
            <div class="base-material-container">
              <div v-for="baseMaterial in select.list" class="base-material-item"
                :style="hoverId === baseMaterial.id ? { background: '#d03050' } : {}"
                @mouseenter="onMouseEnter(baseMaterial.id)" @mouseleave="onMouseLeave()"
                @click="store.remove(baseMaterial)">
                <div
                  :style="{ color: hoverId !== baseMaterial.id ? baseMaterial.secondaryMaterial?.color : '#fff', fontWeight: 'bold', fontSize: '12px' }">
                  {{ baseMaterial.name }}
                </div>
              </div>
            </div>
          </div>

          <div v-if="!store.selected.length" class="empty-container">
            <NEmpty description="我是一个飞机">
              <template #icon>
                <NIcon>
                  <Airplane />
                </NIcon>
              </template>
            </NEmpty>
          </div>
        </div>
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup lang="ts">
import { NButton, NEmpty, NIcon, NDrawer, NDrawerContent } from 'naive-ui';
import { Airplane } from '@vicons/ionicons5'

import { useMainStore } from '@/stores/main';

import {
  useBaseMaterialStore,
} from '@/stores/baseMaterial';
// import SVGClose from '@/components/icons/SVGClose.vue';
import { ref } from 'vue';
import { useRequest } from 'vue-request';
import { getPostList } from '@/common/apis/post';

const store = useBaseMaterialStore();
const mainStore = useMainStore();
const hoverId = ref('');

const { run: searchPost } = useRequest(getPostList, {
  manual: true,
  onSuccess(response: any) {
    console.log(response)
    mainStore.posts = response?.data?.list || []
  },
  onError(error: any) {
    console.log(error)
  }
});

function handleReset() {
  store.reset();
  mainStore.setIsShowSummaryCard(false);
}

function handleSearch() {
  mainStore.setIsShowPostsCard(true);

  const baseMaterialIds = store.selected.map(item => item.list).flat().filter((item: any) => item?.secondaryMaterial.id !== "cookware")?.map(item => item.id);
  const cookwareIds = store.selected.map(item => item.list).flat().filter((item: any) => item?.secondaryMaterial.id === "cookware")?.map(item => item.id);
  
  searchPost({
    pageNum: 1,
    pageSize: 100,
    baseMaterialIds,
    cookwareIds,
    withDetail: true
  })
}

function onMouseEnter(id: string) {
  hoverId.value = id;
}

function onMouseLeave() {
  hoverId.value = '';
}

function onExpandClick(event: any) {
  store.setExpand(event.name);
}
</script>

<style lang="scss" scoped>
@import '@/styles/variable.scss';

.n-drawer-body-content-wrapper {
  @include mobile() {
    padding: 16px 8px !important;
  }
}

.summary-card-container {
  cursor: url('@/assets/images/spatula.png'), auto;
  margin-left: 40px;
  width: 300px;
}

.material-container {
  @include pc() {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }


  .secondary-material-container {
    @include mobile() {
      display: flex;
      align-items: flex-start;
      margin: 5px 0;
    }

    @include pc() {
      margin: 5px 0;
    }

    .secondary-material-name {
      text-align: center;
      font-size: 14px;
      font-weight: bold;

      @include mobile() {
        min-width: 80px;
        text-align: left;
      }


    }
  }

  .base-material-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include pc() {
      flex-direction: column;
    }
  }

  .base-material-item {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2px 0px;
    padding: 2px 8px;
    box-sizing: border-box;
    border-radius: 5px;
    transition: 0.1s linear all;

    @include mobile() {
      line-height: 1;
    }

    &:hover {
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
      cursor: url('@/assets/images/knife.png'), pointer !important;
    }

    .base-material-item-name {
      padding: 0 10px;
    }

    .close-icon {
      width: 10px;
      height: 10px;
    }
  }
}

.drawer-header {
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.empty-container {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-indent: 5px;
}

.operations {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // margin-top: 20px;

  .button {
    cursor: url('@/assets/images/spatula.png'), auto;
    margin: 0 10px;
  }
}
</style>
