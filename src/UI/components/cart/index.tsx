import { useData } from 'contexts/data'
import { CartIcon } from '../icons'

export const Cart: React.FC = () => {
  const { carts: { products }, handleShowAside } = useData()

  return (
    <div className="fixed top-5 right-5">
      <div className="relative rounded-full border-2 p-4 cursor-pointer" onClick={ handleShowAside }>
        { products.length > 0 && <span className="absolute text-orange-400 text-3xl font-bold top-0 right-2">{ products.length }</span> }
        <CartIcon />
      </div>
    </div>
  )
}
