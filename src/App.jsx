import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login_Signup from './Pages/Login_Signup'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login_Signup />} />
      </Routes>
    </>
  )
}

export default App