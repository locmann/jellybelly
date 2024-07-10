import { useQuery } from '@tanstack/react-query';
import { BeanPagination } from 'types/types.ts';

const fetchBeans = async (page: number): Promise<BeanPagination> => {
  const res = await fetch(`https://jellybellywikiapi.onrender.com/api/beans?pageIndex=${page}`);
  return await res.json();
};

export const useBeans = (page: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['beans', page],
    queryFn: () => fetchBeans(page),
  });

  return { beans: data, isLoading, error };
};
