"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Bai8Con_1 = __importDefault(require("./Bai8Con"));
function Bai8Cha({ product }) {
    console.log(product);
    return (<div>
      <h1>Bài 8</h1>
      <h2>Danh sách sản phẩm</h2>
    {product.map((item, index) => {
            return <Bai8Con_1.default key={index} post={item}/>;
        })}
    </div>);
}
exports.default = Bai8Cha;
