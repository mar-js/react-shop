import { useData } from 'contexts/data'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons'
import { IProduct } from 'interfaces'

export const Product: React.FC<IProduct> = (product) => {
  const {
    checkInCart,
    addProduct,
    removeProduct
  } = useData()
  const CHECK_IN_CART = checkInCart(product)

  return (
    <li className="border">
      <img className="w-full h-52" src={ product.thumbnail } alt={ product.title } />
      <div className="flex flex-col justify-center items-center my-6 px-2">
        <h2 className="text-sm mb-2">{ product.title } - ${ product.price }</h2>
        <button type="button" onClick={ () => CHECK_IN_CART ? removeProduct(product.id) : addProduct(product) }>
          { CHECK_IN_CART ? (
            <RemoveFromCartIcon />
          ) : (
            <AddToCartIcon />
          ) }
        </button>
      </div>
    </li>
  )
}
