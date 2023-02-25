import clsx from 'clsx';
import { TIngredient } from '@/store/modules/dish';
import { IIngredient } from '../Filters';
import styles from './index.module.less';

export interface IProps {
  type: TIngredient;
  isActive: boolean;
  ingredient: IIngredient;
}

function IngredientTagComponent({ type, isActive, ingredient }: IProps) {
  return (
    <div
      className={clsx(styles.container, styles[type], styles[isActive ? 'active' : ''])}
      onClick={() => console.log(ingredient)}
    >
      {`${ingredient?.emoji} ${ingredient?.name}`}
    </div>
  );
}

export default IngredientTagComponent;
