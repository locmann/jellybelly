import { useEffect, useRef } from 'react';
import styles from './FactsList.module.css';
import { FactCard } from 'components/FactCard';
import { useFactsContext } from 'context/facts/facts.ts';
import { useFacts } from 'hooks/useFacts.ts';
const FactsList = () => {
  const { facts, factPage, setFactPage, totalFactsPages, setTotalFactsPages, setFacts } =
    useFactsContext();
  const { factsResponse, error, isLoading } = useFacts(factPage);

  const ref = useRef(null);

  const onScroll = () => {
    if (ref.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        if (factPage <= totalFactsPages) {
          setFactPage((prevState) => prevState + 1);
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
    if (factsResponse) {
      console.log(factsResponse, 'Facts');
      setTotalFactsPages(factsResponse.totalPages);
      setFacts((prevState) => {
        if (factsResponse.items !== undefined) {
          return [...prevState, ...factsResponse.items];
        } else {
          return prevState;
        }
      });
    }
  }, [isLoading, error, factsResponse, setFacts, factPage, setTotalFactsPages]);

  return (
    <div
      className={styles.list}
      ref={ref}
      onScroll={onScroll}
    >
      {facts.map((fact) => (
        <FactCard
          fact={fact}
          key={fact.factId}
        />
      ))}
    </div>
  );
};

export { FactsList };
