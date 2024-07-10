import { createContext, useContext } from 'react';
import { CombinationsContextType } from 'types/contextTypes.ts';

export const CombinationsContext = createContext<CombinationsContextType | undefined>(undefined);

export const useCombinationsContext = () => {
  const contextData = useContext(CombinationsContext);
  if (contextData === undefined) {
    throw new Error('Context is undefined');
  }

  return contextData;
};
