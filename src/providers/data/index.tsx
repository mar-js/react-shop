import {
  PropsWithChildren,
  useEffect,
  useState
} from 'react'
import { DataModel } from 'contexts/data'
import DATA from 'mocks/index.json'
import {
  INITIAL_CARTS,
  INITIAL_DATA,
  INITIAL_FILTERS
} from 'utils/constants'
import {
  ICarts,
  IData,
  IDataModel,
  IFilters,
  IProduct
} from 'interfaces'

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ data, setData ] = useState<IData>(INITIAL_DATA)
  const [ filters, setFilters ] = useState<IFilters>(INITIAL_FILTERS)
  const [ carts, setCarts ] = useState<ICarts>(INITIAL_CARTS)
  const [ showAside, setShowAside ] = useState<boolean>(false)

  useEffect(() => (
    setData(DATA)
  ), [])

  const productsFilter = (): IProduct[] => {
    const DATA: IProduct[] = data.products.filter(product => (
      product.price >= filters.minPrice && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    ))

    return DATA
  }

  const checkInCart = (product: IProduct) => carts.products.some(p => p.id === product.id)

  const addProduct = (product: IProduct) => {
    setCarts(prev => ({ products: [ ...prev.products, product ] }))
  }

  const removeProduct = (id: number) => {
    setCarts(prev => ({ products: [ ...prev.products.filter(product => product.id !== id) ] }))
  }

  const handleShowAside = () => {
    setShowAside(prev => !prev)
  }

  const VALUE: IDataModel = {
    data: {
      ...data,
      products: productsFilter() || data.products
    },
    filters,
    setFilters,
    carts,
    addProduct,
    removeProduct,
    checkInCart,
    showAside,
    handleShowAside
  }

  return (
    <DataModel.Provider value={ VALUE }>
      { children }
    </DataModel.Provider>
  )
}
