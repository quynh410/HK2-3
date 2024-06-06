"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const UseContext_1 = __importDefault(require("./Components/UseContext"));
const UseMemo_1 = __importDefault(require("./Components/UseMemo"));
function App() {
    return (<div>
      <UseContext_1.default></UseContext_1.default>
      <UseMemo_1.default></UseMemo_1.default>
    </div>);
}
exports.default = App;
