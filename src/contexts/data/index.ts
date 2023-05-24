import { IDataModel } from 'interfaces'
import { createContext, useContext } from 'react'

export const DataModel = createContext({} as IDataModel)
export const useData = (): IDataModel => useContext(DataModel)
