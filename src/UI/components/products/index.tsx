import { useData } from 'contexts/data'
import { Product } from '../product'

export const Products: React.FC = () => {
  const { data: { products } } = useData()

  return (
    <ul className="grid grid-cols-auto gap-6">
      { products.map(product => (
        <Product
          key={ product.id }
          { ...product }
        />
      )) }
    </ul>
  )
}
