import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Admin from './components/admin/Admin'
import About from './components/About'
import Elements from './components/Elements'
import Content from './components/Content'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/ele" element={<Elements></Elements>}></Route>
        <Route path="/content" element={<Content></Content>}></Route>
      </Routes>
    </div>
  )
}
