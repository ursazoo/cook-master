<template>
  <div class="summary-card-container">
    <NCard title="食材清单" class="card-container">
      <!-- accordion -->
      <!-- :expanded-names="expandId" -->
      <!-- <NCollapse  arrow-placement="right" :default-expanded-names="expandNames"  @item-header-click="onExpandClick($event)">
        <template v-for="select in store.selected">
          <NCollapseItem
            :title="`${select.secondaryMaterialName} x ${select.list.length}`"
            :name="select.secondaryMaterialId"
          >
            <div
              v-for="baseMaterial in select.list"
              class="base-material-item"
              @mouseenter="onMouseEnter(baseMaterial.id)"
              @mouseleave="onMouseLeave()"
            >
              <div class="base-material-item-name">{{ `${baseMaterial.emoji} ${baseMaterial.name}` }}</div>
              <SVGClose
                v-if="hoverId === baseMaterial.id"
                class="close-icon"
                @click="store.remove(baseMaterial)"
              />
            </div>
          </NCollapseItem>
        </template>
      </NCollapse> -->

      <div class="secondary-material-container" v-for="select in store.selected" :key="select.secondaryMaterialId">
        <div class="secondary-material-name" v-if="select.list.length">{{ select.secondaryMaterialName }}</div>
        <div class="base-material-container">
          <div v-for="baseMaterial in select.list" class="base-material-item"
            :style="hoverId === baseMaterial.id ? { background: '#d03050'} : {}" @mouseenter="onMouseEnter(baseMaterial.id)"
            @mouseleave="onMouseLeave()" @click="store.remove(baseMaterial)">
            <div
              :style="{ color: hoverId !== baseMaterial.id ? baseMaterial.secondaryMaterial?.color : '#fff', fontWeight: 'bold', fontSize: '12px' }">
              {{ baseMaterial.name }}
            </div>
            <!-- <SVGClose v-if="hoverId === baseMaterial.id" class="close-icon" @click="store.remove(baseMaterial)" /> -->
          </div>
        </div>
      </div>

      <div v-if="!store.selected.length" style="text-indent: 5px">
        <NEmpty description="我是一个飞机">
          <template #icon>
            <NIcon>
              <Airplane />
            </NIcon>
          </template>
        </NEmpty>
      </div>

    </NCard>
    <div class="operation-container">
      <NButton class="button" type="primary" :disabled="!store.selected.length" @click="handleSearch()">看看能做什么菜</NButton>
      <NButton class="button" type="warning" :disabled="!store.selected.length" @click="handleReset()">重置一下</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NCard, NEmpty, NIcon,  } from 'naive-ui';
import { Airplane } from '@vicons/ionicons5'

import { useMainStore } from '@/stores/main';

import {
  useBaseMaterialStore,
} from '@/stores/baseMaterial';
// import SVGClose from '@/components/icons/SVGClose.vue';
import { ref, computed } from 'vue';
import { useRequest } from 'vue-request';
import { getPostList } from '@/common/apis/post';
import Cookies from 'js-cookie';

const store = useBaseMaterialStore();
const mainStore = useMainStore();
const hoverId = ref('');

// const expandId = computed(() => {
//   console.log(`store.expandedName: ${store.expandedSecondaryMaterialId}`);
//   return store.expandedSecondaryMaterialId;
// });

// const expandNames = computed(() => {
//   console.log('===store.selected===')
//   console.log(store.selected.map(item => item.secondaryMaterialId))
//   return store.selected.map(item => item.secondaryMaterialId)
// })

const { run, data, loading, error } = useRequest(getPostList, {
  manual: true,
});

function handleReset() {
  store.reset();
}

function handleSearch() {
  console.log(Cookies.get('Authorization'))

  // console.log(!mainStore.userInfo)
  if (!Cookies.get('Authorization')) {
    mainStore.setSigninModal(true)
  } else {
    console.log(store.selected.map(item => item.list).flat())
    run({
      pageNum: 1,
      pageSize: 100,
      // TODO: 填充真实需要查询的数据
      baseMaterialIds: [],
      cookwareIds: []
    })

    console.log(data);
  }

  // console.log(store.baseMaterials);
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
.summary-card-container {
  cursor: url('@/assets/images/spatula.png'), auto;
  margin-left: 40px;

  .card-container {
    width: 300px;

    .secondary-material-container {
      margin: 5px 0;

      .secondary-material-name {
        font-size: 14px;
        font-weight: bold;
      }
    }

    .base-material-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .base-material-item {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2px 4px;
      padding: 2px 8px;
      box-sizing: border-box;
      border-radius: 5px;
      transition: 0.1s linear all;

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

  .operation-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    .button {
      cursor: url('@/assets/images/spatula.png'), auto;
    }
  }
}
</style>
