import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Cart, Product, ShopCategory } from './pages'

export default function App() {
   return (
    <section className='bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mens' element={<ShopCategory category='men' />} />
        <Route path='/womens' element={<ShopCategory category='women' />} />
        <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        
      </Routes>
      
    </section>
  )
}
