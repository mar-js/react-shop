import {
  Header,
  Main,
  Nav
} from 'UI/layouts'
import { Products } from 'UI/components'

export const App: React.FC = () => (
  <>
    <Header />
    <Nav />
    <Main>
      <Products />
    </Main>
  </>
)
