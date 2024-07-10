import { createContext, useContext } from 'react';
import { RecipesContext } from 'types/contextTypes.ts';

export const RecipesContext = createContext<RecipesContext | undefined>(undefined);

export const useRecipesContext = () => {
  const contextData = useContext(RecipesContext);
  if (contextData === undefined) {
    throw new Error('Context is undefined');
  }

  return contextData;
};
