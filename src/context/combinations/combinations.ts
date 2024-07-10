import { createContext, useContext } from 'react';
import { CombinationsContext } from 'types/contextTypes.ts';

export const CombinationsContext = createContext<CombinationsContext | undefined>(undefined);

export const useCombinationsContext = () => {
  const contextData = useContext(CombinationsContext);
  if (contextData === undefined) {
    throw new Error('Context is undefined');
  }

  return contextData;
};
