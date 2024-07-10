import { useRecipesContext } from 'context/recipes/recipes.ts';
import { useEffect, useRef } from 'react';
import { useRecipes } from 'hooks/useRecipes.ts';
import { RecipeCard } from 'components/RecipeCard';
import styles from './RecipesList.module.css';
const RecipesList = () => {
  const {
    setRecipes,
    setRecipePage,
    setTotalRecipesPages,
    totalRecipesPages,
    recipes,
    recipePage,
  } = useRecipesContext();

  const { isLoading, error, recipesResponse } = useRecipes(recipePage);

  const ref = useRef(null);

  const onScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (recipePage <= totalRecipesPages) {
          setRecipePage((prevState) => prevState + 1);
        }
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, 'Loading');
    }
    if (error) {
      console.log(error, 'Error');
    }
    if (recipesResponse) {
      console.log(recipesResponse, 'Facts');
      setTotalRecipesPages(recipesResponse.totalPages);
      setRecipes((prevState) => {
        if (recipesResponse.items !== undefined) {
          return [...prevState, ...recipesResponse.items];
        } else {
          return prevState;
        }
      });
    }
  }, [isLoading, error, recipesResponse, setRecipes, recipePage]);

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={styles.list}
    >
      {recipes.map((recipe) => (
        <RecipeCard
          recipe={recipe}
          key={recipe.recipeId}
        />
      ))}
    </div>
  );
};

export { RecipesList };
