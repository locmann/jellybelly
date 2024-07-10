import { RecipePagination } from 'types/types.ts';
import { useQuery } from '@tanstack/react-query';

const fetchRecipes = async (page: number): Promise<RecipePagination> => {
  console.log('request', page);
  const res = await fetch(`https://jellybellywikiapi.onrender.com/api/recipes?pageIndex=${page}`);
  return await res.json();
};

export const useRecipes = (page: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes', page],
    queryFn: () => fetchRecipes(page),
  });

  return { recipesResponse: data, isLoading, error };
};
