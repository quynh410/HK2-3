"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Home_1 = __importDefault(require("./components/Home"));
const Contact_1 = __importDefault(require("./components/Contact"));
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("./components/Login"));
const Register_1 = __importDefault(require("./components/Register"));
const NotFound_1 = __importDefault(require("./components/NotFound"));
require("./App.css");
const Detail_1 = __importDefault(require("./components/Detail"));
const Product_1 = __importDefault(require("./components/Product"));
const Account_1 = __importDefault(require("./components/Account"));
const Admin_1 = __importDefault(require("./components/Admin"));
const CustomLink_1 = __importDefault(require("./components/CustomLink"));
function App() {
    return (<>
    <div>
      <CustomLink_1.default></CustomLink_1.default>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/contact" element={<Contact_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/login" element={<Login_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/register" element={<Register_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/notfound" element={<NotFound_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/detail" element={<Detail_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/product" element={<Product_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/account" element={<Account_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/admin" element={<Admin_1.default />}></react_router_dom_1.Route>
        
      </react_router_dom_1.Routes>

      <br />
      <nav>
        <react_router_dom_1.NavLink to="/" className="nav-link">
          Home
        </react_router_dom_1.NavLink>
        ||||||||||
        <react_router_dom_1.NavLink to="/contact" className="nav-link">
          Contact
        </react_router_dom_1.NavLink>
      </nav>{" "}
      <br /> <br />
      <nav>
        <nav>
          <ul className="nav">
            <li>
              <react_router_dom_1.NavLink to="/" className="active-link">
                Home
              </react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="/product" className="active-link">
                Product
              </react_router_dom_1.NavLink>
            </li>
            <li>
              <react_router_dom_1.NavLink to="/detail" className="active-link">
                Detail
              </react_router_dom_1.NavLink>
            </li>
          </ul>
        </nav>
      </nav>{" "}
      <br />
      <nav>
        <ul className="nav">
          <li>
            <react_router_dom_1.NavLink to="/admin" className="active-link">
              Admin
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/account" className="active-link">
              Account
            </react_router_dom_1.NavLink>
          </li>
          <li>
            <react_router_dom_1.NavLink to="/product" className="active-link">
              Product
            </react_router_dom_1.NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </>);
}
exports.default = App;
