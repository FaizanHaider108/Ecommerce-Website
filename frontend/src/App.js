import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './components/Footer/Footer'
import men_banner from "./components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kid_banner from "./components/Assets/banner_kids.png"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/*  Routes */}
        <Routes>
          <Route path='/' element={ <Shop /> } />
          <Route path='/Mens' element={<ShopCategory banner={men_banner} category="men"/> } />
          <Route path='/Womens' element={<ShopCategory banner={women_banner} category="women"/> } />
          <Route path='/kids' element={ <ShopCategory banner={kid_banner} category="kid" /> } />
          <Route path='/product' element={<Product />}>
  <Route path=':productId' element={<Product />} />
</Route>

          <Route path='/cart' element={ <Cart /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
        {/* Footer */}
        <Footer />
      </BrowserRouter>       
    </>
  )
}

export default App