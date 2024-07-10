import { FactPagination } from 'types/types.ts';
import { useQuery } from '@tanstack/react-query';

const fetchFacts = async (page: number): Promise<FactPagination> => {
  const res = await fetch(`https://jellybellywikiapi.onrender.com/api/facts?pageIndex=${page}`);
  return await res.json();
};

export const useFacts = (page: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['facts', page],
    queryFn: () => fetchFacts(page),
  });

  return { facts: data, error, isLoading };
};
