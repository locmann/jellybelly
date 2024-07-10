import { Recipe } from 'types/types.ts';
import { useQuery } from '@tanstack/react-query';

const fetchRecipe = async (id: number): Promise<Recipe> => {
  const res = await fetch(`https://jellybellywikiapi.onrender.com/api/recipes/${id}`);
  return await res.json();
};

export const useRecipeInfo = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => fetchRecipe(id),
  });

  return { recipeInfo: data, isLoading, error };
};
