"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Bai1_1 = __importDefault(require("./components/Bai1"));
const Bai2_1 = __importDefault(require("./components/Bai2"));
const Bai3_1 = __importDefault(require("./components/Bai3"));
const Bai4_1 = __importDefault(require("./components/Bai4"));
const Bai5_1 = __importDefault(require("./components/Bai5"));
const Bai6_1 = __importDefault(require("./components/Bai6"));
const Bai7_1 = __importDefault(require("./components/Bai7"));
const Bai8_1 = __importDefault(require("./components/Bai8"));
const Bai9_1 = __importDefault(require("./components/Bai9"));
function App() {
    return (<div>
      <h3 className="text-blue-600  font-semibold h-8">Rikkei Academy</h3>
      {/*
          màu: text-
          font: font-
          chiều cao: h-
          chiều dài: w-
          padding 4 góc: p
          padding trái-phải: px
          padding trên-dưới: py
          padding trên: pt
          padding dưới: pb
          padding trái: pl
          padding phải: pr
        */}
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai4_1.default></Bai4_1.default>
      <Bai5_1.default></Bai5_1.default>
      <Bai6_1.default></Bai6_1.default>
      <Bai7_1.default></Bai7_1.default>
      <Bai8_1.default></Bai8_1.default>
      <Bai9_1.default></Bai9_1.default>
    </div>);
}
exports.default = App;
