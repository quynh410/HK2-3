"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bai6Con_1 = __importDefault(require("./Bai6Con"));
function Bai6Cha(props) {
    const { products3 } = props;
    console.log("111111", props);
    return (<div> 
        <h1>Bài 6</h1>
    {products3.map((item) => {
            return <Bai6Con_1.default products={item}></Bai6Con_1.default>;
        })}
    </div>);
}
exports.default = Bai6Cha;
