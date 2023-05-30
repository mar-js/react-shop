import { useData } from 'contexts/data'

export const Close: React.FC = () => {
  const { handleShowAside } = useData()

  return (
    <b className="absolute top-4 left-4 text-3xl font-bold cursor-pointer" onClick={ handleShowAside }>X</b>
  )
}
