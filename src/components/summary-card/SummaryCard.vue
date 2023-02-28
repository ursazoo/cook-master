<template>
  <div class="summaryCardContainer">
    <NCard title="食材清单" class="cardContainer">
      <n-collapse
        arrow-placement="right"
        accordion
        :expanded-names="expandedName"
        @item-header-click="onExpandClick($event)"
      >
        <template v-for="type in store.ingredientTypes">
          <n-collapse-item
            v-if="store.ingredients[type]?.length"
            :title="`${EIngredient[type]} x ${store.ingredients?.[type]?.length}`"
            :name="type"
          >
            <div
              v-for="item in store.ingredients?.[type]"
              class="ingredientItem"
              @mouseenter="onMouseEnter(item.id)"
              @mouseleave="onMouseLeave()"
            >
              <div class="ingredientName">{{ `${item.emoji} ${item.name}` }}</div>
              <SVGClose
                v-if="hoverId === item.id"
                class="closeIcon"
                @click="store.remove(type, item)"
              />
            </div>
          </n-collapse-item>
        </template>
        <!-- <n-collapse-item
          v-if="store.ingredients?.vegetable?.length"
          :title="`${EIngredient.vegetable} x ${store.ingredients?.vegetable?.length}`"
          name="vegetable"
        >
          <div
            v-for="item in store.ingredients?.vegetable"
            class="ingredientItem"
            @mouseenter="onMouseEnter(item.id)"
            @mouseleave="onMouseLeave()"
          >
            <div class="ingredientName">{{ `${item.emoji} ${item.name}` }}</div>
            <SVGClose v-if="hoverId === item.id" class="closeIcon" />
          </div>
        </n-collapse-item>

        <n-collapse-item
          v-if="store.ingredients?.meat?.length"
          :title="`${EIngredient.meat} x ${store.ingredients?.meat?.length}`"
          name="meat"
        >
          <div v-for="item in store.ingredients?.meat" class="ingredientItem">
            <div class="ingredientName">{{ `${item.emoji} ${item.name}` }}</div>
            <SVGClose class="closeIcon" />
          </div>
        </n-collapse-item>

        <n-collapse-item
          v-if="store.ingredients?.aquatic?.length"
          :title="`${EIngredient.aquatic} x ${store.ingredients?.aquatic?.length}`"
          name="aquatic"
        >
          <div v-for="item in store.ingredients?.aquatic" class="ingredientItem">
            <div class="ingredientName">{{ `${item.emoji} ${item.name}` }}</div>
            <SVGClose class="closeIcon" />
          </div>
        </n-collapse-item>

        <n-collapse-item
          v-if="store.ingredients?.stapleFood?.length"
          :title="`${EIngredient.stapleFood} x ${store.ingredients?.stapleFood?.length}`"
          name="stapleFood"
        >
          <div v-for="item in store.ingredients?.stapleFood" class="ingredientItem">
            <div class="ingredientName">{{ `${item.emoji} ${item.name}` }}</div>
            <SVGClose class="closeIcon" />
          </div>
        </n-collapse-item>

        <n-collapse-item
          v-if="store.ingredients?.utensil?.length"
          :title="`${EIngredient.utensil} x ${store.ingredients?.utensil?.length}`"
          name="utensil"
        >
          <div v-for="item in store.ingredients?.utensil" class="ingredientItem">
            <div class="ingredientName">{{ `${item.emoji} ${item.name}` }}</div>
            <SVGClose class="closeIcon" />
          </div>
        </n-collapse-item> -->
      </n-collapse>

      <!-- <div v-if="store.ingredients?.vegetable?.length">
        <div>{{ EIngredient.vegetable }}</div>
      </div>
      <div
        v-for="item in store.ingredients?.vegetable"
        class="ingredientItem"
        @mouseenter="onMouseEnter(item.id)"
        @mouseleave="onMouseLeave()"
      >
        <div>{{ `${item.emoji} ${item.name}` }}</div>
        <SVGClose v-if="hoverId === item.id" class="closeIcon" />
      </div> -->

      <!-- <div v-if="store.ingredients?.meat?.length">{{ EIngredient.meat }}</div>
      <div v-for="item in store.ingredients?.meat" class="ingredientItem">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
        <SVGClose class="closeIcon" />
      </div> -->

      <!-- <div v-if="store.ingredients?.aquatic?.length">{{ EIngredient.aquatic }}</div>
      <div v-for="item in store.ingredients?.aquatic" class="ingredientItem">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
        <SVGClose />
      </div> -->

      <!-- <div v-if="store.ingredients?.stapleFood?.length">{{ EIngredient.stapleFood }}</div>
      <div v-for="item in store.ingredients?.stapleFood" class="ingredientItem">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
        <SVGClose />
      </div>

      <div v-if="store.ingredients?.utensil?.length">{{ EIngredient.utensil }}</div>
      <div v-for="item in store.ingredients?.utensil" class="ingredientItem">
        <div>{{ `${item.emoji} ${item.name}` }}</div>
        <SVGClose />
      </div> -->
    </NCard>
    <div class="operationContainer">
      <NButton type="primary" @click="handleSearch()">看看能做什么菜</NButton>
      <NButton type="warning" @click="handleReset()">重置一下</NButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NCard, NCollapse, NCollapseItem } from 'naive-ui';
import {
  useIngredientStore,
  type TIngredient,
  type IIngredient,
  EIngredient,
} from '../../stores/ingredient';
import SVGClose from '@/components/icons/SVGClose.vue';
import { ref, computed } from 'vue';

console.log(EIngredient);

const store = useIngredientStore();
const hoverId = ref('');

const expandedName = computed(() => {
  console.log(`store.expandedName: ${store.expandedName}`);
  return store.expandedName;
});

function handleReset() {
  store.reset();
}

function handleSearch() {
  console.log(store.ingredients);
}

function onMouseEnter(id: string) {
  hoverId.value = id;
}

function onMouseLeave() {
  hoverId.value = '';
}

function onExpandClick(event: any) {
  store.setExpandedName(event.name);
}
</script>

<style lang="scss" scoped>
.summaryCardContainer {
  .cardContainer {
    width: 300px;

    .ingredientItem {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 5px 0;
      padding: 5px 10px 5px 0;
      cursor: default;
      transition: 0.2s linear all;
      &:hover {
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
      }
      .ingredientName {
        padding: 0 10px;
      }
      .closeIcon {
        width: 10px;
        height: 10px;
        cursor: pointer;
      }
    }
  }
  .operationContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }
}
</style>
