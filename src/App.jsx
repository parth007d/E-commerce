import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login_Signup from './Pages/Login_Signup'
import Home from './Pages/Home'
import Product_Page from './Pages/Product_Page'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login_Signup />} />
        <Route path='/product/:id' element={<Product_Page />} />
      </Routes>
    </>
  )
}

export default App