import { Recipe } from 'types/types.ts';
import { FC } from 'react';
import styles from './RecipeCard.module.css';
import { NavLink } from 'react-router-dom';

type Props = {
  recipe: Recipe;
};

const RecipeCard: FC<Props> = ({ recipe }) => {
  return (
    <div className={styles.cardWrapper}>
      <NavLink to={`/recipes/${recipe.recipeId}`}>
        <h4>{recipe.name}</h4>
      </NavLink>
      <p>{recipe.description}</p>
      {recipe.makingAmount && <p>Make: {recipe.makingAmount}</p>}
      {recipe.cookTime && <p>Total Time: {recipe.cookTime}</p>}
    </div>
  );
};

export { RecipeCard };
