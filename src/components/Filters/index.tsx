import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs } from 'antd';

import { resetIngredient } from '@/store/modules/dish';
import SingleFilterComponent from '../SingleFilter';
import IngredientTagComponent from '../IngredientTag';

import styles from './index.module.less';

export interface IIngredient {
  id: string;
  name: string;
  emoji: string;
}

const FiltersComponent = () => {
  const dispatch = useDispatch();
  const [meatSource, setMeatSource] = useState<IIngredient[]>([]);

  const [ingredients, setIngredients] = useState({
    vegetable: {
      leafy: [
        {
          id: '1',
          emoji: '🥬',
          name: '娃娃菜',
        },
        {
          id: '2',
          emoji: '🥦',
          name: '西蓝花',
        },
      ],
      rhizome: [
        {
          id: '1',
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
    },
    meat: {},
    stapleFood: {},
    utensil: {},
  });

  useEffect(() => {
    setMeatSource([
      {
        id: 'meat_01',
        name: '猪肉',
        emoji: '',
      },
      {
        id: 'meat_02',
        name: '羊肉',
        emoji: '',
      },
    ]);
  }, []);

  const [vegetableTypes, setVegetableTypes] = useState([
    {
      label: `叶菜/花菜`,
      key: '1',
      children: (
        <div className={styles.tagsContainer}>
          {ingredients.vegetable.leafy.map((item, index) => (
            <IngredientTagComponent
              key={`${item.id}_${index}`}
              type="vegetable"
              isActive={false}
              ingredient={item}
            />
          ))}
        </div>
      ),
    },
    {
      label: `土豆/根茎`,
      key: '2',
      children: (
        <div className={styles.tagsContainer}>
          {ingredients.vegetable.rhizome.map((item, index) => (
            <IngredientTagComponent
              key={`${item.id}_${index}`}
              type="vegetable"
              isActive={false}
              ingredient={item}
            />
          ))}
        </div>
      ),
    },
    {
      label: `番茄/茄果`,
      key: '3',
      children: (
        <div className={styles.tagsContainer}>
          {ingredients.vegetable.solanaceous.map((item, index) => (
            <IngredientTagComponent
              key={`${item.id}_${index}`}
              type="vegetable"
              isActive={false}
              ingredient={item}
            />
          ))}
        </div>
      ),
    },
    {
      label: `菌菇/木耳`,
      key: '4',
      children: (
        <div className={styles.tagsContainer}>
          {ingredients.vegetable.mushroom.map((item, index) => (
            <IngredientTagComponent
              // key={`${item?.id}_${index}`}
              type="vegetable"
              isActive={false}
              ingredient={item}
            />
          ))}
        </div>
      ),
    },
    {
      label: `豆制品`,
      key: '5',
      children: <SingleFilterComponent type="vegetable" source={meatSource} />,
    },
    {
      label: `葱姜椒/调料`,
      key: '6',
      children: <SingleFilterComponent type="vegetable" source={meatSource} />,
    },
  ]);

  // 可选蔬菜
  const [vegetable, setVegetable] = useState([]);
  // 可选肉类
  const [meat, setMeat] = useState([]);
  // 可选主食
  const [stapleFood, setStapleFood] = useState([]);
  // 可选厨具
  const [utensils, setUtensils] = useState([]);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>我们准备做饭了！先来选一下食材吧 🥘</div>

      <h3 style={{ margin: '20px 0 0' }}>蔬菜调料</h3>
      <Tabs defaultActiveKey="1" centered items={vegetableTypes} />

      <h3 style={{ margin: '20px 0 0' }}>肉禽蛋品</h3>
      <Tabs defaultActiveKey="1" centered items={vegetableTypes} />

      <h3 style={{ margin: '20px 0 0' }}>米饭面食</h3>
      <Tabs defaultActiveKey="1" centered items={vegetableTypes} />

      <h3 style={{ margin: '20px 0 0' }}>厨具</h3>
      <Tabs defaultActiveKey="1" centered items={vegetableTypes} />

      {/* <div>肉类</div>
      <SingleFilterComponent type="meat" source={meatSource} />

      <div>主食类</div>
      <SingleFilterComponent type="stapleFood" source={meatSource} />

      <div>厨具</div>
      <SingleFilterComponent type="utensils" source={meatSource} /> */}
    </div>
  );
};

export default FiltersComponent;
