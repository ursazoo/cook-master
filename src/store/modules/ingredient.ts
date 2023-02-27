import { IIngredient } from '@/components/Filters';
import { createSlice } from '@reduxjs/toolkit';

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

export type TIngredient = 'vegetable' | 'meat' | 'aquatic' | 'stapleFood' | 'utensil';

export const Type2NameMap = {
  vegetable: '蔬菜调料',
  meat: '肉禽蛋品',
  aquatic: '海鲜水产',
  stapleFood: '米饭面食',
  utensil: '厨具',
};

const initialState: IIngredientState = {
  vegetable: [],
  meat: [],
  aquatic: [],
  stapleFood: [],
  utensil: [],
};

// 创建一个 Slice
export const ingredientSlice = createSlice({
  // 命名空间
  name: 'ingredient',

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    // add(state, { payload }: { payload: { type: TIngredient; ingredient: IIngredient } }) {
    //   console.log(`=====payload====`);
    //   console.log(payload);
    //   state[payload.type] = [...state[payload.type], payload.ingredient];
    //   console.log(`========state==========`);
    //   console.log(state.vegetable);
    // },
    // remove(state, { payload }: { payload: { type: TIngredient; id: string } }) {
    //   state[payload.type] = state[payload.type].filter((item) => item.id !== payload.id);
    //   console.log(state);
    // },
    toggle(state, { payload }: { payload: { type: TIngredient; ingredient: IIngredient } }) {
      debugger;
      console.log(state[payload.type]);
      console.log(payload.ingredient.id);
      if (state[payload.type].every((item: IIngredient) => item.id !== payload.ingredient.id)) {
        state[payload.type] = [...state[payload.type], payload.ingredient];
        return;
      }
      state[payload.type] = state[payload.type].filter((item) => item.id !== payload.ingredient.id);
    },
    reset(state) {
      // state = initialState;
      state.vegetable = [];
      state.meat = [];
      state.aquatic = [];
      state.stapleFood = [];
      state.utensil = [];
    },
  },
});

// 导出 reducers 方法
export const { toggle, reset } = ingredientSlice.actions;

// 默认导出
// export select = (state) => state.ingredient.reducer;
export default ingredientSlice.reducer;
