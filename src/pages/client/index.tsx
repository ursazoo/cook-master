import { useSelector, useDispatch } from 'react-redux';

import FilterComponent, { IIngredient } from '@/components/Filters';
import { IIngredientState, reset } from '@/store/modules/ingredient';

import styles from './index.module.less';
import { Card } from 'antd';
import { useState } from 'react';

const HomePage = () => {
  const dispatch = useDispatch();

  const {
    vegetable: selectedVegetable,
    meat: selectedMeat,
    aquatic: selectedAquatic,
    stapleFood: selectedStapleFood,
    utensil: selectedUtensil,
  } = useSelector((state: any) => state.ingredient);

  // const selectedVegetable = useSelector((state: IIngredientState) => state.vegetable);
  // const selectedMeat = useSelector((state: IIngredientState) => state.meat);

  // const num = useSelector((state: any) => {
  //   console.log(state.ingredient);
  //   return state.ingredient.vegetable;
  // });
  // console.log(`num: ${num}`);

  const [hoverIndex, setHoverIndex] = useState<string>('');

  function handleReset() {
    dispatch(reset());
  }
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.homePageContainer}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <FilterComponent />
          <div>
            <Card title="食材清单" style={{ width: '300px' }}>
              <div>蔬菜调料</div>
              {selectedVegetable.map((item: IIngredient) => {
                return (
                  <div
                    key={item.id}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    onMouseEnter={() => setHoverIndex(item.id)}
                    onMouseLeave={() => setHoverIndex('')}
                  >
                    <div>{`${item.emoji} ${item.name}`}</div>
                    {hoverIndex === item.id ? <div>X</div> : null}
                  </div>
                );
              })}
              <div>肉禽蛋品</div>
              {selectedMeat.map((item: IIngredient) => {
                return (
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    onMouseEnter={() => setHoverIndex(item.id)}
                    onMouseLeave={() => setHoverIndex('')}
                  >
                    <div>{`${item.emoji} ${item.name}`}</div>
                    {hoverIndex === item.id ? <div>X</div> : null}
                  </div>
                );
              })}

              <div>海鲜水产</div>

              <div>米饭面食</div>

              <div>厨具</div>
            </Card>
            <div style={{ display: 'flex' }}>
              <div onClick={handleReset}>重置一下</div>
              <div onClick={handleReset}>重置一下</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
