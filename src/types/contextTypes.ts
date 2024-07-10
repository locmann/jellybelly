import { Bean, Combination, Fact, MileStone, Recipe } from 'types/types.ts';
import { Dispatch, SetStateAction } from 'react';

export interface BeansContext {
  beans: Bean[];
  setBeans: Dispatch<SetStateAction<Bean[]>>;
  beanPage: number;
  setBeanPage: Dispatch<SetStateAction<number>>;
  totalBeansPages: number;
  setTotalBeansPages: Dispatch<SetStateAction<number>>;
}

export interface FactsContext {
  facts: Fact[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
  factPage: number;
  setFactPage: Dispatch<SetStateAction<number>>;
  totalFactsPages: number;
  setTotalFactsPages: Dispatch<SetStateAction<number>>;
}

export interface RecipesContext {
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
  recipePage: number;
  setRecipePage: Dispatch<SetStateAction<number>>;
  totalRecipesPages: number;
  setTotalRecipesPages: Dispatch<SetStateAction<number>>;
}

export interface CombinationsContext {
  combinations: Combination[];
  setCombinations: Dispatch<SetStateAction<Combination[]>>;
  combinationPage: number;
  setCombinationPage: Dispatch<SetStateAction<number>>;
  totalCombinationsPages: number;
  setTotalCombinationsPages: Dispatch<SetStateAction<number>>;
}

export interface MileStonesContext {
  mileStones: MileStone[];
  setMileStones: Dispatch<SetStateAction<MileStone[]>>;
  mileStonePage: number;
  setMileStonePage: Dispatch<SetStateAction<number>>;
  totalMileStonesPages: number;
  setTotalMileStonesPages: Dispatch<SetStateAction<number>>;
}
