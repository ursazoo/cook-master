import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export type TIngredient = 'vegetable' | 'meat' | 'aquatic' | 'stapleFood' | 'utensil';

export interface IIngredient {
  id: string;
  name: string;
  emoji: string;
}

export enum EIngredient {
  'vegetable' = '蔬菜调料',
  'meat' = '肉禽蛋品',
  'aquatic' = '海鲜水产',
  'stapleFood' = '主食面点',
  'utensil' = '厨具',
}

// export type IIngredient = {
//   id: string;
//   name: string;
//   emoji: string;
// };

export interface IIngredientState {
  // 选择的蔬菜调料
  vegetable: IIngredient[];
  // 选择的肉禽蛋品
  meat: IIngredient[];
  // 选择的海鲜水产
  aquatic: IIngredient[];
  // 选择的米饭面食
  stapleFood: IIngredient[];
  // 选择的厨具数
  utensil: IIngredient[];
}

export const useIngredientStore = defineStore('ingredient', () => {
  const initialState: {
    [key: string]: IIngredient[];
  } = {
    vegetable: [],
    meat: [],
    aquatic: [],
    stapleFood: [],
    utensil: [],
  };

  const ingredients = ref(initialState);

  const expandedName = ref<TIngredient>();

  const ingredientTypes: TIngredient[] = ['vegetable', 'meat', 'aquatic', 'stapleFood', 'utensil'];

  function reset() {
    ingredients.value.vegetable = [];
    ingredients.value.meat = [];
    ingredients.value.aquatic = [];
    ingredients.value.stapleFood = [];
    ingredients.value.utensil = [];
  }

  function add(type: TIngredient, ingredient: IIngredient) {
    console.log('will add');
    // if (ingredients.value[type].every((item: IIngredient) => item.id !== ingredient.id)) {}
    ingredients.value[type] = [...ingredients.value[type], ingredient];
    expandedName.value = type;
    console.log(ingredients.value[type]);
  }

  function remove(type: TIngredient, ingredient: IIngredient) {
    console.log('will remove');
    ingredients.value[type] = ingredients.value[type].filter((item) => item.id !== ingredient.id);
    if (ingredients.value[type].length) {
      expandedName.value = type;
    } else {
      for (let key in ingredients.value) {
        console.log(`key: ${key}`);
        if (ingredients.value[key].length) {
          debugger;
          expandedName.value = key as TIngredient;
          break;
        } else {
          expandedName.value = undefined;
          break;
        }
      }
    }

    console.log(ingredients.value[type]);
  }

  function setExpandedName(type: TIngredient) {
    expandedName.value = type;
  }

  return { ingredients, ingredientTypes, expandedName, add, remove, reset, setExpandedName };
});
