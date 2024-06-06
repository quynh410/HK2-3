"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai5Con(props) {
    console.log(111, props);
    const { product } = props;
    return (<div>
        <h3>Thông tin sản phẩm:</h3>
        <p>ID: {product.id}</p>
        <p>Tên: {product.name}</p>
        <p>Giá: {product.price}</p>
        <p>Số lượng: {product.quantity}</p>
      </div>);
}
exports.default = Bai5Con;
