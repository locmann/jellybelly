import { MileStonePagination } from 'types/types.ts';
import { useQuery } from '@tanstack/react-query';

const fetchMileStones = async (page: number): Promise<MileStonePagination> => {
  const res = await fetch(
    `https://jellybellywikiapi.onrender.com/api/milestones?pageIndex=${page}`,
  );
  return await res.json();
};

export const useMileStones = (page: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['milestones', page],
    queryFn: () => fetchMileStones(page),
  });

  return { milestonesResponse: data, isLoading, error };
};
