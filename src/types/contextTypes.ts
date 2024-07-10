import { Bean, Fact } from 'types/types.ts';
import { Dispatch, SetStateAction } from 'react';

export interface ContextType {
  beans: Bean[];
  setBeans: Dispatch<SetStateAction<Bean[]>>;
  beanPage: number;
  setBeanPage: Dispatch<SetStateAction<number>>;
  totalBeansPages: number;
  setTotalBeansPages: Dispatch<SetStateAction<number>>;

  facts: Fact[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
  factPage: number;
  setFactPage: Dispatch<SetStateAction<number>>;
  totalFactsPages: number;
  setTotalFactsPages: Dispatch<SetStateAction<number>>;
}
