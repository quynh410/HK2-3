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
function Form() {
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const handleClick = () => {
        console.log('click');
    };
    const handleChange = (e) => {
        // console.log('change')
        console.log(e.target.value);
        // cập nhập state
        setName(e.target.value);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    return (<div>
    {/*
        các kĩ thuật xử lý trong form
        - Có 2 kĩ thuật xử lí chính
        1. controller
            + Lấy dữ liệu ng dùng nhâpj vào ô input
            + lấy dữ liệu khi ng dùng nhập vào ô text Area
            + Chọn select- option
            - ở trong funtion component muốn quản lí dữ liệu ( trạng thái ) dùng useState
        2. uncontroller'
        */}
      <div>
        <label htmlFor="">Tên : </label>
        <input onChange={handleChange} type="text"/>
        <p>Tên người dùng nhập : <b>{name}</b></p>
        <label htmlFor="">Email: </label>
        <input type="text" onChange={handleChangeEmail}/>
        <p>Email người dùng nhập: <b> {email}</b></p>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>);
}
exports.default = Form;
