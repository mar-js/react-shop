import {
  IData,
  IFilters,
  TCategories
} from 'interfaces'

export const INITIAL_DATA: IData = {
  products: [],
  total: null,
  skip: null,
  limit: null
}

export const INITIAL_FILTERS: IFilters = {
  category: 'all',
  minPrice: 0
}

export const CATEGORIES: TCategories[] = [
  'all',
  'fragrances',
  'groceries',
  'home-decoration',
  'laptops',
  'skincare',
  'smartphones'
]
