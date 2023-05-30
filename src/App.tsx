import {
  Aside,
  Header,
  Main,
  Nav
} from 'UI/layouts'
import { Cart, Products } from 'UI/components'

export const App: React.FC = () => (
  <>
    <Header />
    <Nav />
    <Cart />
    <Aside />
    <Main>
      <Products />
    </Main>
  </>
)
