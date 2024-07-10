import { Recipe } from 'types/types.ts';
import { FC } from 'react';
import styles from './RecipeCard.module.css';

type Props = {
  recipe: Recipe;
};

const RecipeCard: FC<Props> = ({ recipe }) => {
  return (
    <div className={styles.cardWrapper}>
      <h4>{recipe.name}</h4>
      <p>{recipe.description}</p>
      {recipe.makingAmount && <p>Make: {recipe.makingAmount}</p>}
      {recipe.cookTime && <p>Total Time: {recipe.cookTime}</p>}
    </div>
  );
};

export { RecipeCard };
