"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai6Con({ products }) {
    return (<div>
        <h3>Thông tin sản phẩm:</h3>
        <p>ID: {products.id}</p>
        <p>Tên: {products.name}</p>
        <p>Giá: {products.address}</p>
        <p>Số lượng: {products.email}</p>
      </div>);
}
exports.default = Bai6Con;
