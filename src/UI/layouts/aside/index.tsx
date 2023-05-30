import { useData } from 'contexts/data'
import { Close } from 'UI/components'

export const Aside: React.FC = () => {
  const { carts, showAside } = useData()

  return (
    <aside className={ `${showAside ? 'flex' : 'hidden'} flex-col justify-center items-center pt-20 p-3 fixed top-0 right-0 bottom-0 w-96 border-l-2 bg-[#105eab]` }>
      <Close />
      <div className="w-full h-full">
        { carts.products.map(product => (
          <img
            key={ product.id }
            src={ product.thumbnail }
            alt={ product.title }
            className="w-full h-52 mb-3"
          />
        )) }
      </div>
    </aside>
  )
}
