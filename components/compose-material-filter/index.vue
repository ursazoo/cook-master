<template>
  <div class="compose-material-filter-container">
    <div v-for="(primaryMaterial, index) in props.primaryMaterialList" :key="index"
      class="primary-material-filter-container">
      <div class="primary-material-filter-title">{{ primaryMaterial.name }}</div>
      <MaterialFilter :key="primaryMaterial.id" :secondaryMaterialList="primaryMaterial.secondaryMaterialList" :primaryMaterial="primaryMaterial" />
    </div>

    <div class="primary-material-filter-container">
      <div class="primary-material-filter-title">厨房用具</div>
      <CookwareFilter :cookwareList="cookwareList" />
    </div>

  </div>
</template>

<script setup lang="ts">
import {
  IPrimaryMaterial,
} from "@/types/material";
import MaterialFilter from '../material-filter/index.vue';
import CookwareFilter from '../cookware-filter/index.vue';
import { IBaseItem } from '../../types/material';

const props = defineProps<{
  primaryMaterialList: IPrimaryMaterial[]
  cookwareList: IBaseItem[]
}>();
</script>

<style scoped lang="scss">
.compose-material-filter-container {
  width: 100%;
  margin-bottom: 20px;

  .primary-material-filter-container {
    margin-bottom: 20px;

    .primary-material-filter-title {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>