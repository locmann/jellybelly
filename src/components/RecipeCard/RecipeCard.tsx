import { Recipe } from 'types/types.ts';
import { FC } from 'react';

type Props = {
  recipe: Recipe;
};

const RecipeCard: FC<Props> = ({ recipe }) => {
  return (
    <div>
      <h4>{recipe.name}</h4>
      <p>{recipe.description}</p>
      {recipe.makingAmount && <p>Make: {recipe.makingAmount}</p>}
      {recipe.cookTime && <p>Total Time: {recipe.cookTime}</p>}
    </div>
  );
};

export { RecipeCard };
