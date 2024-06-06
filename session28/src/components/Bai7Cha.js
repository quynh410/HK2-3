"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Bai7Con_1 = __importDefault(require("./Bai7Con"));
function Bai7Cha({ posts }) {
    console.log(posts);
    return (<div>
      <h1>Bài 7</h1>
      <h2>Danh sách Post</h2>
    {posts.map((item, index) => {
            return <Bai7Con_1.default key={index} product={item}/>;
        })}
    </div>);
}
exports.default = Bai7Cha;
