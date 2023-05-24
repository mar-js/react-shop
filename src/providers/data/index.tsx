import {
  PropsWithChildren,
  useEffect,
  useState
} from 'react'
import { DataModel } from 'contexts/data'
import DATA from 'mocks/index.json'
import { INITIAL_DATA, INITIAL_FILTERS } from 'utils/constants'
import {
  IData,
  IFilters,
  IProduct
} from 'interfaces'

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ data, setData ] = useState<IData>(INITIAL_DATA)
  const [ filters, setFilters ] = useState<IFilters>(INITIAL_FILTERS)

  useEffect(() => (
    setData(DATA)
  ), [])

  const productsFilter = (): IProduct[] => {
    const DATA: IProduct[] = data.products.filter(product => (
      product.price > filters.minPrice || product.category === filters.category
    ))

    return DATA
  }

  const VALUE = {
    data: {
      ...data,
      products: productsFilter() || data.products
    },
    filters,
    setFilters
  }

  return (
    <DataModel.Provider value={ VALUE }>
      { children }
    </DataModel.Provider>
  )
}
