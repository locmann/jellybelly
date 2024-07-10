import { Bean, Combination, Fact, MileStone, Recipe } from 'types/types.ts';
import { Dispatch, SetStateAction } from 'react';

export interface BeansContextType {
  beans: Bean[];
  setBeans: Dispatch<SetStateAction<Bean[]>>;
  beanPage: number;
  setBeanPage: Dispatch<SetStateAction<number>>;
  totalBeansPages: number;
  setTotalBeansPages: Dispatch<SetStateAction<number>>;
}

export interface FactsContextType {
  facts: Fact[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
  factPage: number;
  setFactPage: Dispatch<SetStateAction<number>>;
  totalFactsPages: number;
  setTotalFactsPages: Dispatch<SetStateAction<number>>;
}

export interface RecipesContextType {
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
  recipePage: number;
  setRecipePage: Dispatch<SetStateAction<number>>;
  totalRecipesPages: number;
  setTotalRecipesPages: Dispatch<SetStateAction<number>>;
}

export interface CombinationsContextType {
  combinations: Combination[];
  setCombinations: Dispatch<SetStateAction<Combination[]>>;
  combinationPage: number;
  setCombinationPage: Dispatch<SetStateAction<number>>;
  totalCombinationsPages: number;
  setTotalCombinationsPages: Dispatch<SetStateAction<number>>;
}

export interface MileStonesContextType {
  mileStones: MileStone[];
  setMileStones: Dispatch<SetStateAction<MileStone[]>>;
  mileStonePage: number;
  setMileStonePage: Dispatch<SetStateAction<number>>;
  totalMileStonesPages: number;
  setTotalMileStonesPages: Dispatch<SetStateAction<number>>;
}
