"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function UseState() {
    // const result = useState(0);
    // const [c,d] = useState(0);
    // console.log(result);
    // let arr = [5,6];
    // let [a,b]= arr
    const [count, setCount] = (0, react_1.useState)(0);
    const increase = () => {
        setCount(pre => pre + 1);
        setCount(5);
        setCount(b => b + 3);
    };
    return (<div>
        <p>Giá trị biến cao : {count}</p>
        <button onClick={increase}>Tăng </button>
        <button onClick={() => setCount(count - 1)}>Giảm </button>
    </div>);
}
exports.default = UseState;
