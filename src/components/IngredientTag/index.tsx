import clsx from 'clsx';
import { TIngredient } from '@/store/modules/ingredient';
import { IIngredient } from '../Filters';
import styles from './index.module.less';

export interface IProps {
  type: TIngredient;
  isActive: boolean;
  ingredient: IIngredient;
  onClick: (ingredient: IIngredient) => void;
}

function IngredientTagComponent({ type, isActive, ingredient, onClick }: IProps) {
  console.log(`isActive: ${isActive}`);
  return (
    <div
      className={clsx(styles.container, styles[type], styles[isActive ? 'active' : ''])}
      onClick={() => onClick(ingredient)}
    >
      {`${ingredient?.emoji} ${ingredient?.name}`}
    </div>
  );
}

export default IngredientTagComponent;
