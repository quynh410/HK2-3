import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import "./App.css";
import Detail from "./components/Detail";
import Product from "./components/Product";
import Account from "./components/Account";
import Admin from "./components/Admin";
import Homepage from "./components/Homepage";
import CustomLink from "./components/CustomLink";

export default function App() {
  return (
    <>
    <div>
      <CustomLink></CustomLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/notfound" element={<NotFound />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        
      </Routes>

      <br />
      <nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        ||||||||||
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </nav>{" "}
      <br /> <br />
      <nav>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/" className="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="active-link">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/detail" className="active-link">
                Detail
              </NavLink>
            </li>
          </ul>
        </nav>
      </nav>{" "}
      <br />
      <nav>
        <ul className="nav">
          <li>
            <NavLink to="/admin" className="active-link">
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink to="/account" className="active-link">
              Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="active-link">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}
