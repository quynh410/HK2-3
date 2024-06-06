"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function SelectOption() {
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (<div>
      <h1>Select Option</h1>
      <p>Tỉnh/ Thành Phố: </p>
      <select onChange={handleChange} name="" id="">
        <option value="">Chọn tỉnh/ thành phố</option>
        <option value="HN">Hà Nội</option>
        <option value="HCM">Hồ Chí Minh</option>
        <option value="QN">Quảng Ninh</option>
      </select>
    </div>);
}
exports.default = SelectOption;
