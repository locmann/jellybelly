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
