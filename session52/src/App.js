"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/Home/Home"));
const Login_1 = __importDefault(require("./components/login/Login"));
const Register_1 = __importDefault(require("./components/register/Register"));
const Admin_1 = __importDefault(require("./components/admin/Admin"));
const About_1 = __importDefault(require("./components/About"));
const Elements_1 = __importDefault(require("./components/Elements"));
const Content_1 = __importDefault(require("./components/Content"));
function App() {
    return (<div>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default></Home_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/login" element={<Login_1.default></Login_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/register" element={<Register_1.default></Register_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/admin" element={<Admin_1.default></Admin_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/about" element={<About_1.default></About_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/ele" element={<Elements_1.default></Elements_1.default>}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/content" element={<Content_1.default></Content_1.default>}></react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
