"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai7() {
    const [gender, setGender] = react_1.default.useState('');
    const handleChange = (e) => {
        setGender(e.target.value);
    };
    return (<div className='all'>
      <h1>Bài 7</h1>
      <p>Giới tính: {gender}</p>
      <input type="radio"/> <label htmlFor="">Nam</label>
      <input type="radio"/> <label htmlFor="">Nữ</label>
      <input type="radio"/> <label htmlFor="">Khác</label>
      <br />
      <button>Submit</button>
    </div>);
}
exports.default = Bai7;
