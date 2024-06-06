"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Product_1 = __importDefault(require("./Product"));
const obj = {
    name: "hoa",
    age: 18,
    address: "hà nội"
};
//destuctoring
// const props={
//     products:[],
//     a:5,
// } 
// const{name,age,address}=obj
// console.log(name);
// console.log(age);
// console.log(address);
function Products(props) {
    // dùng destructoring
    const { products } = props;
    console.log(111, products);
    return (<div>
        {products.map((item, index) => {
            return <Product_1.default key={index} product={item}></Product_1.default>;
        })}
    </div>);
}
exports.default = Products;
