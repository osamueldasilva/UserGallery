import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/Global.css'

import { autenticContextProvider } from './Contexts/autenticContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <autenticContextProvider>
      <App />
    </autenticContextProvider>
  </React.StrictMode>,
)
