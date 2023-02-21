import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addIngredient,
  removeIngredient,
  TIngredient,
  Type2NameMap,
} from "@/store/modules/dish";
import styles from "./index.module.less";
import { IIngredient } from "../Filters";

interface IProps {
  // 筛选的食材种类
  type: TIngredient;
  // 筛选的食材数据源
  source: any[];
}

const SingleFilterComponent = ({ type, source }: IProps) => {
  const dispatch = useDispatch();
  const dish = useSelector((store: any) => store.dish);

  const data = dish[type];

  // 检测到变化后调用接口查询支持的菜谱
  useEffect(() => {
    console.log(data)
  }, [data])

  function handleSelect(ingredient: IIngredient) {
    const isExisted = data.some(
      (item: IIngredient) => item.id === ingredient.id
    );
    console.log(isExisted);

    if (isExisted) {
      dispatch(removeIngredient({ type, id: ingredient.id }));
      return;
    }
    dispatch(addIngredient({ type, ingredient }));
  }

  return (
    <div>
      <div className={styles.title}>{Type2NameMap[type]}</div>
      {source?.map((item: IIngredient) => {
        return (
          <div onClick={() => handleSelect(item)} key={item.id}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default SingleFilterComponent;
