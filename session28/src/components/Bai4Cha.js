"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bai4Con_1 = __importDefault(require("./Bai4Con"));
function Bai4Cha(name) {
    return (<div>
      <h1>Bài4</h1>
      <Bai4Con_1.default></Bai4Con_1.default>
      <p> Họ và tên components cha: {name.name}</p>
      <p> Họ và tên components con: {name.name}</p>
    </div>);
}
exports.default = Bai4Cha;
