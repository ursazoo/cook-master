<template>
  <div class="summaryCardContainer">
    <NCard title="食材清单" style="width: 300px">
      <div v-if="store.ingredients?.vegetable?.length">蔬菜调料</div>
      <div v-for="item in store.ingredients?.vegetable">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
      </div>

      <div v-if="store.ingredients?.meat?.length">肉禽蛋品</div>
      <div v-for="item in store.ingredients?.meat">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
      </div>

      <div v-if="store.ingredients?.aquatic?.length">海鲜水产</div>
      <div v-for="item in store.ingredients?.aquatic">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
      </div>

      <div v-if="store.ingredients?.stapleFood?.length">米饭面食</div>
      <div v-for="item in store.ingredients?.stapleFood">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
      </div>

      <div v-if="store.ingredients?.utensil?.length">厨具</div>
      <div v-for="item in store.ingredients?.utensil">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
      </div>
    </NCard>
    <div style="display: flex">
      <div @click="handleReset()">重置一下</div>
      <div @click="handleReset()">重置一下</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui';
import { useIngredientStore, type TIngredient, type IIngredient } from '../../stores/ingredient';

const store = useIngredientStore();

function handleReset() {
  store.reset();
}
</script>

<style lang="scss" scoped>
.summaryCardContainer {
  color: red;
}
</style>
