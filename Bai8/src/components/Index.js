"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Navbar_1 = __importDefault(require("./Navbar"));
const Article_1 = __importDefault(require("./Article"));
const ListCart_1 = __importDefault(require("./ListCart"));
const Menu_1 = __importDefault(require("./Menu"));
function Index() {
    return (<div className="container">
        <Header_1.default></Header_1.default>
        <Navbar_1.default></Navbar_1.default>
        <main className='main'>
          <Menu_1.default></Menu_1.default>
          <ListCart_1.default></ListCart_1.default>
        <Article_1.default></Article_1.default>
        </main>
    </div>);
}
exports.default = Index;
