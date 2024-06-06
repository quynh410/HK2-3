"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./components/Header"));
const Main_1 = __importDefault(require("./components/Main"));
const Menu_1 = __importDefault(require("./components/Menu"));
const Footer_1 = __importDefault(require("./components/Footer"));
require("./App.css");
function App() {
    return (<div>
      <Header_1.default></Header_1.default>
      <Main_1.default></Main_1.default>
      <Menu_1.default></Menu_1.default>
      <Footer_1.default></Footer_1.default>
    </div>);
}
exports.default = App;
