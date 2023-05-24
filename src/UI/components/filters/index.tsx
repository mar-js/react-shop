import { ChangeEvent, useId } from 'react'
import { useData } from 'contexts/data'
import { CATEGORIES } from 'utils/constants'
import { TCategories } from 'interfaces'

export const Filters: React.FC = () => {
  const { filters, setFilters } = useData()
  const RANGE_ID = useId()
  const FILTERS_ID = useId()

  const handleChangeRange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      minPrice: Number(target.value)
    }))
  }

  const handleChangeSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      category: target.value as TCategories
    }))
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <label htmlFor={ RANGE_ID }>Range: </label>
        <input type="range" name="range" id={ RANGE_ID } value={ filters.minPrice } onChange={ handleChangeRange } />
        - ${ filters.minPrice }
      </div>
      <div className="flex justify-center items-center gap-2">
        <label htmlFor={ FILTERS_ID }>Filters: </label>
        <select className="bg-[#1368b8] p-1 capitalize" name="filters" id={ FILTERS_ID } value={ filters.category } onChange={ handleChangeSelect }>
          { CATEGORIES.map(category => <option key={ category } value={ category }>{ category }</option>) }
        </select>
      </div>
    </div>
  )
}
