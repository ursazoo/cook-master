import { useSelector, useDispatch } from 'react-redux';

import FilterComponent from '@/components/Filters';
import { resetIngredient } from '@/store/modules/dish';

import styles from './index.module.less';
import { Card } from 'antd';

const HomePage = () => {
  const dispatch = useDispatch();
  function handleReset() {
    dispatch(resetIngredient());
  }
  return (
    <>
      <div className={styles.container}></div>
      <div className={styles.homePageContainer}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <FilterComponent />
          <Card
            title="食材清单"
            style={{ width: '300px' }}
            extra={<div onClick={handleReset}>重置一下</div>}
          >
            <div>蔬菜类</div>

            <div>肉类</div>

            <div>主食类</div>

            <div>厨具</div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomePage;
