import { useEffect, useState } from 'react'
import { INITIAL_DATA } from 'utils/constants'
import DATA from 'mocks/index.json'
import { IUseData } from 'interfaces'

export const useData = (): IUseData => {
  const [ data, setData ] = useState(INITIAL_DATA)

  useEffect(() => (
    setData(DATA)
  ), [])

  return { data }
}
