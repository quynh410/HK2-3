"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const UseRef_1 = __importDefault(require("./components/UseRef"));
const UseMemo_1 = __importDefault(require("./components/UseMemo"));
const UseReducer_1 = __importDefault(require("./components/UseReducer"));
const UseContext_1 = __importDefault(require("./components/UseContext"));
const Header_1 = __importDefault(require("./components/Header"));
const Main_1 = __importDefault(require("./components/Main"));
const UseCallBack_1 = __importDefault(require("./components/UseCallBack"));
function App() {
    const [active, setActive] = (0, react_1.useState)(false);
    const [count, setCount] = (0, react_1.useState)(0);
    const handleClick = () => {
        setCount(count + 1);
        setActive(!active);
    };
    console.log('components app khi click ');
    //Khi component App được re-render thì các component con cũng re-render theo.
    /*
    nếu active là true thì hiển thị thẻ  p với nội dung là xin chào
    nếu active là false thì ko hiển thị gì cả
  
    */
    const getIdproduct = () => {
    };
    let result = (0, react_1.useCallback)(() => {
        const getIdProduct = () => {
        };
        return getIdProduct;
    }, []);
    return (<div>
      <UseRef_1.default></UseRef_1.default>
      <UseMemo_1.default></UseMemo_1.default>
      <UseReducer_1.default></UseReducer_1.default>
      <UseCallBack_1.default></UseCallBack_1.default>
      <UseContext_1.default></UseContext_1.default>
      <Header_1.default counts={active}></Header_1.default>
      <Main_1.default getIdproduct={result}></Main_1.default>
      {active ? <p>Xin chào</p> : ""}
      <button onClick={handleClick}>click active</button>
    </div>);
}
exports.default = App;
