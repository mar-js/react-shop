import {
  Header,
  Main,
  Nav
} from 'UI/layouts'
import { Cart, Products } from 'UI/components'

export const App: React.FC = () => (
  <>
    <Cart />
    <Header />
    <Nav />
    <Main>
      <Products />
    </Main>
  </>
)
