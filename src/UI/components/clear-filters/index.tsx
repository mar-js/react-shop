import { useData } from 'contexts/data'

export const ClearFilters: React.FC = () => {
  const { clearFilters } = useData()

  return (
    <button className="text-2xl font-bold" onClick={ clearFilters }>x</button>
  )
}
