"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Child_1 = __importDefault(require("./Child"));
function Parent(c) {
    console.log(11111, c);
    return (<div>Parent
      <Child_1.default></Child_1.default>
      <p>xin chao {c.a} nam nay toi {c.b}</p>
    </div>);
}
exports.default = Parent;
