import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { resetIngredient } from "@/store/modules/dish";
import SingleFilterComponent from "../SingleFilter";

export interface IIngredient {
  id: string;
  name: string;
  emoji: string;
}

const FiltersComponent = () => {
  const dispatch = useDispatch();
  const [meatSource, setMeatSource] = useState<IIngredient[]>([]);

  useEffect(() => {
    setMeatSource([
      {
        id: "meat_01",
        name: "猪肉",
        emoji: "",
      },
      {
        id: "meat_02",
        name: "羊肉",
        emoji: "",
      },
    ]);
  }, []);

  // 可选蔬菜
  const [vegetable, setVegetable] = useState([]);
  // 可选肉类
  const [meat, setMeat] = useState([]);
  // 可选主食
  const [stapleFood, setStapleFood] = useState([]);
  // 可选厨具
  const [utensils, setUtensils] = useState([]);

  function handleReset() {
    dispatch(resetIngredient());
  }

  return (
    <div>
      <div onClick={handleReset}>重置一下</div>
      <SingleFilterComponent type="meat" source={meatSource} />
    </div>
  );
};

export default FiltersComponent;
