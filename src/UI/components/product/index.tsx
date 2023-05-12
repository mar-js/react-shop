import { IProduct } from 'interfaces'

export const Product: React.FC<IProduct> = ({
  thumbnail,
  title,
  price
}) => (
  <li className="border">
    <img className="w-full h-52" src={ thumbnail } alt={ title } />
    <div className="my-6 px-2">
      <h2 className="text-sm">{ title } - ${ price }</h2>
    </div>
  </li>
)
