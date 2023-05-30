export type TCategories = 'all' | 'home-decoration' | 'laptops' | 'smartphones' | 'fragrances' | 'skincare' | 'groceries'

export interface IDataModel {
  data: IData;
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
  carts: ICarts;
  addProduct: (product: IProduct) => void;
  checkInCart: (product: IProduct) => boolean;
  removeProduct: (id: number) => void;
  showAside: boolean;
  handleShowAside: () => void;
}

export interface ICarts {
  products: IProduct[] | [];
}

export interface IFilters {
  minPrice: number;
  category: TCategories;
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
