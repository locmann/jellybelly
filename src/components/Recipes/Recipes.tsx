import RecipesContextProvider from 'context/recipes/RecipesContextProvider.tsx';
import { RecipesList } from 'components/RecipesList';

const Recipes = () => {
  return (
    <RecipesContextProvider>
      <RecipesList />
    </RecipesContextProvider>
  );
};

export { Recipes };
