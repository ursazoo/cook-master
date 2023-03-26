<template>
  <div class="material-filter-container">
    <!-- <NTabs type="line" animated :tab-style="{ color: '#4E5969', fontWeight: 'bold' }">
      <NTabPane v-for="secondaryMaterial in props?.secondaryMaterialList" :key="secondaryMaterial.id"
        :name="secondaryMaterial.name" :tab="secondaryMaterial.name">
        <div class="base-material-container">
          <BaseMaterial v-for="baseMaterial in secondaryMaterial.baseMaterialList" :key="baseMaterial.id"
            :base-material="baseMaterial" @select="onSelect(baseMaterial)" @cancel="onCancel(baseMaterial)" />
        </div>
      </NTabPane>
    </NTabs> -->
    <div class="base-material-container">
      <BaseMaterial v-for="cookware in props?.cookwareList" :key="cookware.id" type="cookware" :base-material="cookware"
        @select="onSelect(cookware)" @cancel="onCancel(cookware)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane, NTag } from 'naive-ui';
import { IBaseMaterial, useBaseMaterialStore } from '@/stores/baseMaterial';
import BaseMaterial from '@/components/base-material/index.vue';

const props = defineProps<{
  cookwareList: any[]
}>();

const store = useBaseMaterialStore();


function onSelect(baseMaterial: IBaseMaterial) {
  store.add({
    secondaryMaterial: {
      id: 'cookware',
      name: '厨房用具',
      color: '#4E5969'
    },
    ...baseMaterial
  })
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