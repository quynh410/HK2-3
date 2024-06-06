"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Calculation extends react_1.default.Component {
    //  cộng
    addNumbers(a, b) {
        return a + b;
    }
    // trừ
    subtractNumbers(a, b) {
        return a - b;
    }
    // nhân
    multiplyNumbers(a, b) {
        return a * b;
    }
    // chia
    divideNumbers(a, b) {
        return a / b;
    }
    render() {
        const addResult = this.addNumbers(5, 3);
        const subtracResult = this.subtractNumbers(8, 4);
        const multiplyResult = this.multiplyNumbers(2, 6);
        const divideResult = this.divideNumbers(10, 2);
        return (<div>
        <h1>Kết quả các phép tính</h1>
        <p>Cộng: {addResult}</p>
        <p>Trừ: {subtracResult}</p>
        <p>Nhân: {multiplyResult}</p>
        <p>Chia: {divideResult}</p>
      </div>);
    }
}
exports.default = Calculation;
