import { PropsWithChildren } from 'react'

export const Main: React.FC<PropsWithChildren> = ({ children }) => (
  <main className="container m-auto px-2">
    { children }
  </main>
)
