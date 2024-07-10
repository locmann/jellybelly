import CombinationsContextProvider from 'context/combinations/CombinationsContextProvider.tsx';
import { CombinationsList } from 'components/CombinationsList';

const Combinations = () => {
  return (
    <CombinationsContextProvider>
      <CombinationsList />
    </CombinationsContextProvider>
  );
};

export { Combinations };
