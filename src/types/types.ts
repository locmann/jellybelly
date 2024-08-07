export interface Bean {
  beanId: number;
  groupName?: string[];
  ingredients?: string[];
  flavorName?: string;
  description?: string;
  colorGroup?: string;
  backgroundColor?: string;
  imageUrl?: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
}

export interface BeanPagination {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items?: Bean[];
}

export interface Fact {
  factId: number;
  title?: string;
  description?: string;
}

export interface FactPagination {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items?: Fact[];
}

export interface Recipe {
  recipeId: number;
  name?: string;
  description?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  makingAmount?: string;
  imageUrl?: string;
  ingredients?: string[];
  additions1?: string[];
  additions2?: string[];
  additions3?: string[];
  directions?: string[];
  tips?: string[];
}

export interface RecipePagination {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items?: Recipe[];
}

export interface Combination {
  combinationId: number;
  name?: string;
  tag?: string[];
}

export interface CombinationPagination {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items?: Combination[];
}

export interface MileStone {
  mileStoneId: number;
  year: number;
  description?: string;
}

export interface MileStonePagination {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items?: MileStone[];
}
