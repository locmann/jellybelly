import { Bean } from 'types/types.ts';
import { Dispatch, SetStateAction } from 'react';

export interface ContextType {
  beans: Bean[];
  setBeans: Dispatch<SetStateAction<Bean[]>>;
}
