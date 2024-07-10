import { FactsList } from 'components/FactsList';
import FactsContextProvider from 'context/facts/FactsContextProvider.tsx';

const Facts = () => {
  return (
    <FactsContextProvider>
      <FactsList />
    </FactsContextProvider>
  );
};

export { Facts };
