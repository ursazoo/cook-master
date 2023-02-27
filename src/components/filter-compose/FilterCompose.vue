<template>
  <div class="filterComposeContainer">
    <div style="margin-bottom: 20px">我们准备做饭了！先来选一下食材吧 🥘</div>
    <div>
      <n-tabs type="line" animated class="tagsContainer">
        <n-tab-pane
          v-for="label in vegetableTypes"
          :key="`label_${label}`"
          :name="label"
          :tab="EVegetableType[label]"
        >
          <IngredientTag
            v-for="item in vegeatables[label]"
            type="vegetable"
            :key="item.id"
            :is-selected="isSelected('vegetable', item.id)"
            :ingredient="item"
            @chose="onSelect('vegetable', item)"
          />
        </n-tab-pane>
      </n-tabs>
    </div>
    <div>
      <n-tabs type="line" animated class="tagsContainer">
        <n-tab-pane
          v-for="label in meatTypes"
          :key="`label_${label}`"
          :name="label"
          :tab="EMeatType[label]"
        >
          <IngredientTag
            v-for="item in meat[label]"
            type="meat"
            :key="item.id"
            :is-selected="isSelected('meat', item.id)"
            :ingredient="item"
            @chose="onSelect('meat', item)"
          />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NTabs, NTabPane } from 'naive-ui';
import { ref, toRefs, computed } from 'vue';
import { useIngredientStore, type TIngredient, type IIngredient } from '../../stores/ingredient';

import IngredientTag from '../ingredient-tag/IngredientTag.vue';

enum EVegetableType {
  'leafy' = '叶菜/花菜',
  'rhizome' = '土豆/根茎',
  'solanaceous' = '番茄/茄果',
  'mushroom' = '菌菇/木耳',
  'beans' = '豆制品',
  'condiment' = '葱姜/调料',
}

enum EMeatType {
  'pork' = '猪肉',
  'beef' = '牛肉',
  'lamb' = '羊肉',
  'egg' = '鸡蛋',
}

type TVegetableType = 'leafy' | 'rhizome' | 'solanaceous' | 'mushroom' | 'condiment' | 'beans';
type TMeatType = 'pork' | 'lamb' | 'beef' | 'egg';
type TAquaticType = 'fish' | 'sea-food';

const store = useIngredientStore();

const { add, remove } = store;

const { vegetable: selectedVegetable, meat: selectedMeat } = toRefs(store.ingredients);

// const selectedVegetables = store.ingredients

const vegetableTypes: TVegetableType[] = [
  'leafy',
  'rhizome',
  'solanaceous',
  'mushroom',
  'condiment',
  'beans',
];

const meatTypes: TMeatType[] = ['pork', 'lamb', 'beef', 'egg'];

const vegeatables = ref({
  leafy: [
    {
      id: 'vegetable_leafy_1',
      emoji: '🥬',
      name: '娃娃菜',
    },
    {
      id: 'vegetable_leafy_2',
      emoji: '🥦',
      name: '西蓝花',
    },
  ],
  rhizome: [
    {
      id: 'vegetable_rhizome_1',
      emoji: '🥔',
      name: '土豆',
    },
  ],
  solanaceous: [
    {
      id: '1',
      emoji: '🍆',
      name: '茄子',
    },
  ],
  mushroom: [],
  condiment: [],
  beans: [],
});

const meat = ref({
  pork: [
    {
      id: 'meat_pork_1',
      emoji: '🐷',
      name: '猪肉末',
    },
    {
      id: 'meat_pork_2',
      emoji: '🐷',
      name: '猪排骨',
    },
  ],
  lamb: [
    {
      id: 'meat_lamb_1',
      emoji: '🐑',
      name: '羊排',
    },
  ],
  beef: [
    {
      id: 'meat_beef_1',
      emoji: '🐂',
      name: '牛腩',
    },
  ],
  egg: [
    {
      id: 'meat_egg_1',
      emoji: '🥚',
      name: '鸡蛋',
    },
  ],
});

function isSelected(type: TIngredient, id: string) {
  return store.ingredients[type].some((item) => item.id === id);
}

function onSelect(type: TIngredient, ingredient: any) {
  console.log(type, ingredient);
  if (store.ingredients[type].every((item) => item.id !== ingredient.id)) {
    add(type, ingredient);
  } else {
    remove(type, ingredient);
  }
}

// const isSelected = computed(() => {

// });
</script>

<style lang="scss" scoped>
.n-tab-pane {
  display: flex;
  flex-wrap: wrap;
}
</style>
