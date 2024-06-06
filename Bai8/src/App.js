"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Index_1 = __importDefault(require("./components/Index"));
require("./App.css");
function App() {
    return (<>
   <Index_1.default></Index_1.default>
   </>);
}
exports.default = App;
