<template>
  <div class="material-filter-container">
    <NTabs :theme-overrides="tabsThemeOverrides" type="line" animated :tab-style="{ color, fontWeight: 'bold' }">
      <NTabPane v-for="secondaryMaterial in props?.secondaryMaterialList" :key="secondaryMaterial.id"
        :name="secondaryMaterial.name" :tab="secondaryMaterial.name">
        <div class="base-material-container">
          <BaseMaterial v-for="baseMaterial in secondaryMaterial.baseMaterialList" :key="baseMaterial.id"
            :base-material="baseMaterial" @select="onSelect(baseMaterial)" @cancel="onCancel(baseMaterial)" />
        </div>
      </NTabPane>
    </NTabs>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NTag } from 'naive-ui';
import { IBaseMaterial, useBaseMaterialStore } from '@/stores/baseMaterial';
import BaseMaterial from '@/components/base-material/index.vue';
import { TabsProps } from 'naive-ui'

type TabsThemeOverrides = NonNullable<TabsProps['themeOverrides']>


const props = defineProps<{
  primaryMaterial: any;
  secondaryMaterialList: any[]
}>();

const store = useBaseMaterialStore();
const color = computed(() => props?.primaryMaterial?.color)

console.log('===props==')
console.log(props)

const tabsThemeOverrides: TabsThemeOverrides = {
  tabTextColorActiveLine: color.value,
  tabTextColorHoverLine: color.value,
  barColor: color.value,
}

// const { add, remove } = store;

// function isSelected(baseMaterial: IBaseMaterial) {
//   // return store.baseMaterialTypes[type].some((item) => item.id === id);

//   const secondaryMaterial = store.selected?.filter(item => {
//     return item.secondaryMaterialId === baseMaterial.secondaryMaterial?.id
//   }) || {}

//   console.log(`secondaryMaterial.length: ${secondaryMaterial.length}`)
//   if (!secondaryMaterial.length) {
//     // 未选择
//     return false
//   } else {
//     // 已选择
//     return secondaryMaterial[0]?.list.some(item => item.id === baseMaterial.id)
//   }

//   // return secondaryMaterial?.list?.some(item => item.)

//   // const secondary = store.selected?.[baseMaterial.secondaryMaterial.id] || [];
//   // return secondary.some((item: IBaseMaterial) => item.id === baseMaterial.id)
// }

function onSelect(baseMaterial: IBaseMaterial) {
  store.add(baseMaterial)
  // if (isSelected(baseMaterial)) {
  //   // 已选择
  //   console.log('已选择')
  // } else {
  //   // 未选择
  //   console.log('未选择')
  //   store.add(baseMaterial)
  // }
}

function onCancel(baseMaterial: IBaseMaterial) {
    console.log('已选择')
    store.remove(baseMaterial)
  }
</script>

<style lang="scss" scoped>
.base-material-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.n-tabs {
  font-size: 14px;
}
</style>