import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext'

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <ShopContextProvider>
    <BrowserRouter>
      <StrictMode>
          <App />
      </StrictMode>
    </BrowserRouter>
  </ShopContextProvider>
  
);
