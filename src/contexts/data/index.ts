import { IData } from 'interfaces'
import { createContext, useContext } from 'react'

export const DataModel = createContext({} as IData)
export const useData = (): IData => useContext(DataModel)
