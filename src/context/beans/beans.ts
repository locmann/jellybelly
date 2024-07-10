import { createContext, useContext } from 'react';
import { BeansContext } from 'types/contextTypes.ts';

export const BeansContext = createContext<BeansContext | undefined>(undefined);

export const useBeansContext = () => {
  const contextData = useContext(BeansContext);
  if (contextData === undefined) {
    throw new Error('BeansContext is undefined');
  }

  return contextData;
};
