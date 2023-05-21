import {
  PropsWithChildren,
  useEffect,
  useState
} from 'react'
import { DataModel } from 'contexts/data'
import DATA from 'mocks/index.json'
import { INITIAL_DATA } from 'utils/constants'

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ data, setData ] = useState(INITIAL_DATA)

  useEffect(() => (
    setData(DATA)
  ), [])

  return (
    <DataModel.Provider value={ data }>
      { children }
    </DataModel.Provider>
  )
}
