"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai1() {
    const handleClick = () => {
        console.log("Clicked");
        alert("Clicked");
    };
    return (<div>
        <h1>Bài 1</h1>
      <button onClick={handleClick}>Click me</button>
    </div>);
}
exports.default = Bai1;
