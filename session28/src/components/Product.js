"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Product(props) {
    console.log(111, props);
    const { product } = props;
    return (<div>
        tên sản phẩm {product.name}
        giá sản phẩm {product.price}
    </div>);
}
exports.default = Product;
