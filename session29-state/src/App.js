"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Function_1 = __importDefault(require("./components/Function"));
const Class_1 = __importDefault(require("./components/Class"));
function App() {
    return (<div>
      <Function_1.default></Function_1.default>
      <Class_1.default></Class_1.default>
    </div>);
}
exports.default = App;
