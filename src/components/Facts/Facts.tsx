import { useFacts } from 'hooks/useFacts.ts';
import { useAppContext } from 'context/context.ts';
import { useEffect } from 'react';
import { FactsList } from 'components/FactsList';

const Facts = () => {
  const { setFacts, factPage, setTotalFactsPages } = useAppContext();

  const { facts, error, isLoading } = useFacts(factPage);

  useEffect(() => {
    if (isLoading) {
      console.log(isLoading, 'Loading');
    }
    if (error) {
      console.log(error, 'Error');
    }
    if (facts) {
      console.log(facts, 'Facts');
      setTotalFactsPages(facts.totalPages);
      setFacts((prevState) => {
        if (facts.items !== undefined) {
          return [...prevState, ...facts.items];
        } else {
          return prevState;
        }
      });
    }
  }, [isLoading, error]);

  return <FactsList />;
};

export { Facts };
