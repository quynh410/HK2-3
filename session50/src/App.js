"use strict";
// import React from "react";
// import Home from "./components/Home/Home";
// import { Route, Routes } from "react-router-dom";
// import Header from "./components/header/Header";
// import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
// import Products from "./components/product/Products";
// import ProductDetail from "./components/product/ProductDetail";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ProductDetail_1 = __importDefault(require("./components/Baitap/ProductDetail"));
const Student_1 = __importDefault(require("./components/Baitap/Student"));
const Employee_1 = __importDefault(require("./components/Baitap/Employee"));
const Login_1 = __importDefault(require("./components/Login/Login"));
const PrivateRouter_1 = __importDefault(require("./components/Baitap/PrivateRouter"));
const Account_1 = __importDefault(require("./components/Baitap/Account"));
function App() {
    const [isAuthenticated, setIsAuthenticated] = (0, react_1.useState)(false);
    return (<>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/product/:id" element={<ProductDetail_1.default></ProductDetail_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/student/:name" element={<Student_1.default></Student_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/employee" element={<Employee_1.default></Employee_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/login" element={<Login_1.default></Login_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/login" element={<Login_1.default setAuthenticated={setIsAuthenticated}/>}/>
        <react_router_dom_1.Route path="/account" element={<PrivateRouter_1.default isAuthenticated={isAuthenticated}>
              <Account_1.default />
            </PrivateRouter_1.default>}/>

      </react_router_dom_1.Routes>
    </>);
}
exports.default = App;
