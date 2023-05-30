import { useData } from 'contexts/data'
import {
  Close,
  ClearCarts,
  ButtonCart
} from 'UI/components'

export const Aside: React.FC = () => {
  const { carts, showAside } = useData()

  return (
    <aside className={ `${showAside ? 'flex' : 'hidden'} flex-col justify-center items-center pt-20 p-3 fixed top-0 right-0 bottom-0 w-96 border-l-2 bg-[#105eab]` }>
      <Close />
      { carts.products.length > 0 && (
        <ClearCarts />
      ) }
      <div className="w-full h-full mt-5">
        { carts.products.map(product => (
          <div key={ product.id } className="w-full h-52 mb-3 relative">
            <img className="w-full h-full" src={ product.thumbnail } alt={ product.title } />
            <div className="absolute bottom-0 left-2 ">
              <ButtonCart product={ product } />
            </div>
          </div>
        )) }
      </div>
    </aside>
  )
}
