import React, { useState } from 'react'
import {Routes , Route, Link, NavLink, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
export default function App() {
  const [count, setCount]= useState(0)
  const navigate = useNavigate();
  const handleRedirect = () => {
    // chuyển hướng về trang home 
    navigate('/');
  }
  return (
    <>
    {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </nav> */}
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <button onClick={handleRedirect}>Chuyển Hướng về Home</button>
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <button onClick={() => navigate(2)}>Trang trước</button>
    </nav>
    {/* Khu vực định tuyến các route , không được viết HTML trong này  */}
      <Routes>
        {/* Định nghĩa  */}
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/" element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}
