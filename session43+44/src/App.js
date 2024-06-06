"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import Header from './components/Header'
// import Main from './components/Main'
// import Login from './components/login/Login'
const Register_1 = __importDefault(require("./components/register/Register"));
const Admin_1 = __importDefault(require("./components/register/Admin"));
function App() {
    return (<div>
      {/* <Header></Header>
        <Main></Main> */}
      {/* <Login></Login> */}
      <Register_1.default></Register_1.default>
      <Admin_1.default></Admin_1.default>
    </div>);
}
exports.default = App;
