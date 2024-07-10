import { createContext, useContext } from 'react';
import { MileStonesContextType } from 'types/contextTypes.ts';

export const MileStonesContext = createContext<MileStonesContextType | undefined>(undefined);

export const useMileStonesContext = () => {
  const contextData = useContext(MileStonesContext);
  if (contextData === undefined) {
    throw new Error('MileStonesContext is undefined');
  }

  return contextData;
};
