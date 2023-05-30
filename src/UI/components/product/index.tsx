import { ButtonCart } from '..'
import { IProduct } from 'interfaces'

export const Product: React.FC<IProduct> = (product) => (
  <li className="border">
    <img className="w-full h-52" src={ product.thumbnail } alt={ product.title } />
    <div className="flex flex-col justify-center items-center my-6 px-2">
      <h2 className="text-sm mb-2">{ product.title } - ${ product.price }</h2>
      <ButtonCart product={ product } />
    </div>
  </li>
)
