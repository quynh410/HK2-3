"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Student() {
    const { name } = (0, react_router_dom_1.useParams)();
    return (<div>
      <h2>Bài 2</h2>
        <p>Name: {name}</p>
    </div>);
}
exports.default = Student;
