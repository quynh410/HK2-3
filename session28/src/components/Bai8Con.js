"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai8Con({ post }) {
    return (<div>
    <h4>ID: {post.id}</h4>
    <p>name: {post.name}</p>
    <p>price: {post.price}</p>
    <p>quantity: {post.quantity}</p>
  </div>);
}
exports.default = Bai8Con;
