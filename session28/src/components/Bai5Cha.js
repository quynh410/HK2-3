"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bai5Con_1 = __importDefault(require("./Bai5Con"));
function Bai5Cha(props) {
    const { product } = props;
    return (<div>
        <h1>Bài 5</h1>
    {product.map((item, index) => {
            return <Bai5Con_1.default key={index} product={item}></Bai5Con_1.default>;
        })}
    </div>);
}
exports.default = Bai5Cha;
