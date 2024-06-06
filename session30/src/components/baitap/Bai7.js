"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Bai7() {
    const [numbers, setNumbers] = (0, react_1.useState)([]);
    const [displayNumbers, setDisplayNumbers] = (0, react_1.useState)('');
    const addNumber = () => {
        const newNumber = Math.floor(Math.random() * 10) + 1;
        const updatedNumbers = [...numbers, newNumber];
        setNumbers(updatedNumbers);
        setDisplayNumbers(updatedNumbers.join(', '));
        // khi muốn load lại components  thì đi xét state lại cho nó 
        // bắt buộc cái state phải khác state ban dầu
    };
    return (<div>
        <h1>Bài 7</h1>
        <h3>Mảng số[<span>{displayNumbers}</span> ]</h3>
        <button onClick={addNumber}>Add Element</button>
        {/* <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul> */}
      </div>);
}
exports.default = Bai7;
