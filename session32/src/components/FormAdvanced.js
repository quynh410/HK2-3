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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function FormAdvanced() {
    const [email, setEmail] = (0, react_1.useState)("");
    const [userName, setUsername] = (0, react_1.useState)("");
    // cách xử lí tối ưu hơn
    const [user, setUser] = (0, react_1.useState)({
        email: "",
        userName: "",
        password: "",
    });
    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
    };
    console.log("Gía trị user", user);
    return (<div>
        <h1>Form Advanced </h1>
        <br />
      <label htmlFor="">Email : </label>
      <input name="email" onChange={handleChange} type="text"/> <br /> <br />
      <label htmlFor="">Username : </label>
      <input name="userName" onChange={handleChange} type=""/> <br /> <br />
      <label htmlFor="">Password : </label>
      <input name="password" onChange={handleChange} type="text"/> <br /> <br />
      <label htmlFor="">ConfirmPassword : </label>
      <input name="confirmPassword" onChange={handleChange} type="text"/> <br /> <br />
      <button>Register</button>
    </div>);
}
exports.default = FormAdvanced;
