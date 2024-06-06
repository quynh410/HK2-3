"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Register() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const register = (e) => {
        e.preventDefault();
        navigate("/login");
    };
    return (<div>
      Đăng kí
      <form onSubmit={register}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email"/>
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name"/>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"/>
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword"/>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>);
}
exports.default = Register;
