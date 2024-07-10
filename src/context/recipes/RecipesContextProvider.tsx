import { FC, PropsWithChildren, useState } from 'react';
import { Recipe } from 'types/types.ts';
import { RecipesContext } from 'context/recipes/recipes.ts';

const RecipesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipePage, setRecipePage] = useState(1);
  const [totalRecipesPages, setTotalRecipesPages] = useState(1);

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        recipePage,
        setRecipePage,
        totalRecipesPages,
        setTotalRecipesPages,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
