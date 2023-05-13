export type TCategories = 'all' | 'home-decoration' | 'laptops' | 'smartphones' | 'fragrances' | 'skincare' | 'groceries'

export interface IUseData {
  data: IData;
}

export interface IData {
  products: [] | IProduct[],
  total: number | null;
  skip: number | null;
  limit: number | null;
}

export interface IProducts {
  products: IProduct[];
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: TCategories | string;
  thumbnail: string;
  images: string[];
}
