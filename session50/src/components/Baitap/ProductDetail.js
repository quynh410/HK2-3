"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function ProductDetail() {
    const { id } = (0, react_router_dom_1.useParams)();
    return (<div>
      <h2>Bài 1</h2>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
    </div>);
}
exports.default = ProductDetail;
