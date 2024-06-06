"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UseEffect_1 = __importDefault(require("./Components/UseEffect"));
require("./App.css");
const Bai1_1 = __importDefault(require("./Components/Bai1"));
const Bai2_1 = __importDefault(require("./Components/Bai2"));
const Bai3_1 = __importDefault(require("./Components/Bai3"));
const Bai5_1 = __importDefault(require("./Components/Bai5"));
const Bai6_1 = __importDefault(require("./Components/Bai6"));
const Bai7_1 = __importDefault(require("./Components/Bai7"));
const Bai8_1 = __importDefault(require("./Components/Bai8"));
const Bai9_1 = __importDefault(require("./Components/Bai9"));
const Bai10_1 = __importDefault(require("./Components/Bai10"));
function App() {
    return (<div>
      <UseEffect_1.default></UseEffect_1.default>
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai5_1.default></Bai5_1.default>
      <Bai6_1.default></Bai6_1.default>
      <Bai7_1.default></Bai7_1.default>
      <Bai8_1.default></Bai8_1.default>
      <Bai9_1.default></Bai9_1.default>
      <Bai10_1.default></Bai10_1.default>
    </div>);
}
exports.default = App;
