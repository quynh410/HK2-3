// import React from "react";
// import Home from "./components/Home/Home";
// import { Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
// import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
// import Products from "./components/product/Products";
// import ProductDetail from "./components/product/ProductDetail";

// export default function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/home" element={<Home></Home>}>
//         <Route path="/home/header" element={<Header></Header>}></Route>
//         </Route>
//         <Route path="/register" element={<Register></Register>}></Route>
//         <Route path="/login" element={<Login></Login>}></Route>
//         <Route path="/products" element={<Products></Products>}></Route>
//         <Route path="/productdetail/:productId" element={<ProductDetail></ProductDetail>}></Route>
//       </Routes>
//     </>
//   );
// }

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/Baitap/ProductDetail'
import Student from './components/Baitap/Student'
import Employee from './components/Baitap/Employee'
import Login from './components/Login/Login'
import PrivateRouter from './components/Baitap/PrivateRouter'
import Account from './components/Baitap/Account'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState (false);

  return (
    <>
      <Routes>
        <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/student/:name" element={<Student></Student>}></Route>
        <Route path="/employee" element={<Employee></Employee>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/account"
          element={
            <PrivateRouter isAuthenticated={isAuthenticated}>
              <Account />
            </PrivateRouter>
          }
        />

      </Routes>
    </>
  )
}
