"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
class ClassComponent extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            // khi muốn cập nhật state 
            this.setState({
                count: this.state.count + 1,
            });
        };
        this.state = {
            name: 'Minh Thu',
            age: 20,
            count: 2
        };
    }
    componentDidMount() {
        // trong Xmind
    }
    // dùng các phương thức mặc định react cung cấp
    componentWillmount() {
        console.log('chạy sau khi component khởi tạo xog giá trị state');
        // trong Xmind 
    }
    // các phương thức cung cấp trong giai đoạn updating 
    shouldComponentUpdate(nextProps, nextState) {
        // bắt buộc phải return về true hoặc flase
        // nếu không gọi phương thức ra thì mặc định phương thức trả về true
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('component wil update được gọi');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate được gọi");
    }
    render() {
        return (<div>
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>Thay đổi state</button>
        <p>giá trị count: {this.state.count}</p>
      </div>);
    }
}
exports.default = ClassComponent;
