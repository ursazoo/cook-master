<template>
  <div class="homePageContainer">
    <!-- <FilterComponent /> -->
    <FilterCompose />
    <SummaryCard />
  </div>
</template>

<script setup lang="ts">
import SummaryCard from '@/components/summary-card/SummaryCard.vue';
import FilterCompose from '@/components/filter-compose/FilterCompose.vue';
function handleReset() {}
</script>

<style lang="scss" scoped>
.homePageContainer {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgb(0 0 0 / 10%);
  padding: 20px 40px;
  box-sizing: border-box;
}
</style>
