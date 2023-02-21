import { IIngredient } from "@/components/Filters";
import { createSlice } from "@reduxjs/toolkit";

export interface IDishState {
  // 选择的蔬菜数组
  vegetables: IIngredient[];
  // 选择的肉类数组
  meat: IIngredient[];
  // 选择的主食数组
  stapleFood: IIngredient[];
  // 选择的厨具数组
  utensils: IIngredient[];
}

export type TIngredient = "vegetables" | "meat" | "stapleFood" | "utensils";

export const Type2NameMap = {
  vegetables: "蔬菜类",
  meat: "肉类",
  stapleFood: "主食类",
  utensils: "使用的厨具",
};

const initialState: IDishState = {
  vegetables: [],
  meat: [],
  stapleFood: [],
  utensils: [],
};

// 创建一个 Slice
export const dish = createSlice({
  // 命名空间
  name: "dish",

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    addIngredient(
      state,
      { payload }: { payload: { type: TIngredient; ingredient: IIngredient } }
    ) {
      console.log(payload);
      state[payload.type] = [...state[payload.type], payload.ingredient];
      console.log(state);
    },
    removeIngredient(
      state,
      { payload }: { payload: { type: TIngredient; id: string } }
    ) {
      state[payload.type] = state[payload.type].filter(
        (item) => item.id !== payload.id
      );
      console.log(state);
    },
    resetIngredient(state) {
      // state = initialState;
      state.vegetables = [];
      state.meat = [];
      state.stapleFood = [];
      state.utensils = [];
    },
  },
});

// 导出 reducers 方法
export const { addIngredient, removeIngredient, resetIngredient } =
  dish.actions;

// 默认导出
export default dish.reducer;
