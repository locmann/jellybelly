import { createContext, useContext } from 'react';
import { FactsContext } from 'types/contextTypes.ts';

export const FactsContext = createContext<FactsContext | undefined>(undefined);

export const useFactsContext = () => {
  const contextData = useContext(FactsContext);
  if (contextData === undefined) {
    throw new Error('Context is undefined');
  }

  return contextData;
};
