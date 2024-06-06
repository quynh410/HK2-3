"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const UseState_1 = __importDefault(require("./components/UseState"));
const Hook_1 = __importDefault(require("./components/Hook"));
const Bai1_1 = __importDefault(require("./components/baitap/Bai1"));
const Bai2_1 = __importDefault(require("./components/baitap/Bai2"));
const Bai3_1 = __importDefault(require("./components/baitap/Bai3"));
const Bai4_1 = __importDefault(require("./components/baitap/Bai4"));
const Bai5_1 = __importDefault(require("./components/baitap/Bai5"));
const Bai6_1 = __importDefault(require("./components/baitap/Bai6"));
const Bai7_1 = __importDefault(require("./components/baitap/Bai7"));
const Bai8_1 = __importDefault(require("./components/baitap/Bai8"));
const Bai9_1 = __importDefault(require("./components/baitap/Bai9"));
const Bai10_1 = __importDefault(require("./components/baitap/Bai10"));
function App() {
    return (<div>
      <Hook_1.default></Hook_1.default>
      <UseState_1.default></UseState_1.default>
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai4_1.default></Bai4_1.default>
      <Bai5_1.default></Bai5_1.default>
      <Bai6_1.default></Bai6_1.default>
      <Bai7_1.default></Bai7_1.default>
      <Bai8_1.default></Bai8_1.default>
      <Bai9_1.default></Bai9_1.default>
      <Bai10_1.default></Bai10_1.default>
    </div>);
}
exports.default = App;
