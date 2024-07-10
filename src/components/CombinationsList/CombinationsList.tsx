import { useCombinationsContext } from 'context/combinations/combinations.ts';
import { useCombinations } from 'hooks/useCombinations.ts';
import { useEffect, useRef } from 'react';
import { CombinationCard } from 'components/CombinationCard';
import styles from './CombinationsList.module.css';
const CombinationsList = () => {
  const {
    setCombinations,
    setCombinationPage,
    combinations,
    setTotalCombinationsPages,
    combinationPage,
    totalCombinationsPages,
  } = useCombinationsContext();

  const { isLoading, error, combinationsResponse } = useCombinations(combinationPage);

  const ref = useRef(null);

  const onScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (combinationPage <= totalCombinationsPages) {
          setCombinationPage((prevState) => prevState + 1);
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
    if (combinationsResponse) {
      console.log(combinationsResponse, 'Facts');
      setTotalCombinationsPages(combinationsResponse.totalPages);
      setCombinations((prevState) => {
        if (combinationsResponse.items !== undefined) {
          return [...prevState, ...combinationsResponse.items];
        } else {
          return prevState;
        }
      });
    }
  }, [
    isLoading,
    error,
    combinationsResponse,
    setCombinations,
    combinationPage,
    setTotalCombinationsPages,
  ]);

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      className={styles.list}
    >
      {combinations.map((combination) => (
        <CombinationCard
          combination={combination}
          key={combination.combinationId}
        />
      ))}
    </div>
  );
};

export { CombinationsList };
