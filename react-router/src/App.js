"use strict";
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
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./components/Home"));
const About_1 = __importDefault(require("./components/About"));
const Contact_1 = __importDefault(require("./components/Contact"));
const NotFound_1 = __importDefault(require("./components/NotFound"));
function App() {
    const [count, setCount] = (0, react_1.useState)(0);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleRedirect = () => {
        // chuyển hướng về trang home 
        navigate('/');
    };
    return (<>
    {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </nav> */}
    <nav>
      <react_router_dom_1.NavLink to="/">Home</react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink to="/About">About</react_router_dom_1.NavLink>
      <react_router_dom_1.NavLink to="/Contact">Contact</react_router_dom_1.NavLink>
      <button onClick={handleRedirect}>Chuyển Hướng về Home</button>
      <button onClick={() => navigate(-1)}>Quay lại</button>
      <button onClick={() => navigate(2)}>Trang trước</button>
    </nav>
    {/* Khu vực định tuyến các route , không được viết HTML trong này  */}
      <react_router_dom_1.Routes>
        {/* Định nghĩa  */}
        <react_router_dom_1.Route path="/" element={<Home_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/About" element={<About_1.default />}></react_router_dom_1.Route>
        <react_router_dom_1.Route path="/Contact" element={<Contact_1.default />}/>
        <react_router_dom_1.Route path="/" element={<NotFound_1.default />}></react_router_dom_1.Route>
      </react_router_dom_1.Routes>
    </>);
}
exports.default = App;
