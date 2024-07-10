import { CombinationPagination } from 'types/types.ts';
import { useQuery } from '@tanstack/react-query';

const fetchCombinations = async (page: number): Promise<CombinationPagination> => {
  const res = await fetch(
    `https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=${page}`,
  );
  return await res.json();
};

export const useCombinations = (page: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['combinations', page],
    queryFn: () => fetchCombinations(page),
  });

  return { combinationsResponse: data, isLoading, error };
};
