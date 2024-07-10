import { createContext, useContext } from 'react';
import { MileStonesContext } from 'types/contextTypes.ts';

export const MileStonesContext = createContext<MileStonesContext | undefined>(undefined);

export const useMileStonesContext = () => {
  const contextData = useContext(MileStonesContext);
  if (contextData === undefined) {
    throw new Error('MileStonesContext is undefined');
  }

  return contextData;
};
