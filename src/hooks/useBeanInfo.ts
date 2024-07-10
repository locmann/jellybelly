import { useQuery } from '@tanstack/react-query';
import { Bean } from 'types/types.ts';

const fetchBean = async (id: number): Promise<Bean> => {
  const res = await fetch(`https://jellybellywikiapi.onrender.com/api/beans/${id}`);
  return await res.json();
};

export const useBeanInfo = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['bean', id],
    queryFn: () => fetchBean(id),
  });

  return { beanInfo: data, isLoading, error };
};
