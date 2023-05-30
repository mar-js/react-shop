import { useData } from 'contexts/data'
import { ClearCartIcon } from '..'

export const ClearCarts: React.FC = () => {
  const { clearCarts } = useData()

  return (
    <button onClick={ clearCarts } >
      <ClearCartIcon />
    </button>
  )
}
