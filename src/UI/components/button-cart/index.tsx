import { useData } from 'contexts/data'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons'
import { IButtonCart } from 'interfaces'

export const ButtonCart: React.FC<IButtonCart> = ({ product }) => {
  const {
    checkInCart,
    addProduct,
    removeProduct
  } = useData()
  const CHECK_IN_CART = checkInCart(product)

  return (
    <button type="button" onClick={ () => CHECK_IN_CART ? removeProduct(product.id) : addProduct(product) }>
      { CHECK_IN_CART ? (
        <RemoveFromCartIcon />
      ) : (
        <AddToCartIcon />
      ) }
    </button>
  )
}
