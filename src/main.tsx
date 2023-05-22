import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataProvider } from 'providers/data'
import { App } from 'App'
import 'styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
)
