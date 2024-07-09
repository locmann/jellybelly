import { useQuery } from '@tanstack/react-query';
import { BeanPagination } from 'types/types.ts';

const fetchBeans = async (): Promise<BeanPagination> => {
  const res = await fetch('https://jellybellywikiapi.onrender.com/api/beans');
  return await res.json();
};

export const useBeans = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['beans'],
    queryFn: fetchBeans,
  });

  return { beans: data, isLoading, error };
};
