import { useId } from 'react'
import { CATEGORIES } from 'utils/constants'

export const Filters: React.FC = () => {
  const RANGE_ID = useId()
  const FILTERS_ID = useId()

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <label htmlFor={ RANGE_ID }>Range: </label>
        <input type="range" name="range" id={ RANGE_ID } />
      </div>
      <div className="flex justify-center items-center gap-2">
        <label htmlFor={ FILTERS_ID }>Filters: </label>
        <select className="bg-[#1368b8] p-1 capitalize" name="filters" id={ FILTERS_ID }>
          { CATEGORIES.map(category => <option key={ category } value={ category }>{ category }</option>) }
        </select>
      </div>
    </div>
  )
}
