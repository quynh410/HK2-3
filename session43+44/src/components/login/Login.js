"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./login.scss");
function Login() {
    return (
    //  Muốn dùng scss thì phải cài npm i sass
    <div className="login">
      <div className="login-name">
        <label htmlFor="">User Name : </label> 
        <input type="text" className='login-name__input'/> <br />
      </div>

      <div className="login-pass">
        <label htmlFor="">Password : </label>
        <input type="text" className='login-pass__input'/> <br />
      </div>
      <button>Login</button>
    </div>);
}
exports.default = Login;
