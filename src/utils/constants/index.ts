import { IData, TCategories } from 'interfaces'

export const INITIAL_DATA: IData = {
  products: [],
  total: null,
  skip: null,
  limit: null
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
