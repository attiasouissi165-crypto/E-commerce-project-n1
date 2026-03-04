import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './component/header/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <CartProvider >
      <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
