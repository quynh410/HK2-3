"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("./components/index"));
require("./App.css");
function App() {
    return (<div>
      <index_1.default></index_1.default>
    </div>);
}
exports.default = App;
