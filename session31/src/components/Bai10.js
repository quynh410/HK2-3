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
class Bai10 extends react_1.Component {
    constructor(props) {
        super(props);
        this.incrementCount = () => {
            this.setState((prevState) => ({
                count: (prevState.count + 0.5) % 11
            }));
        };
        this.state = {
            count: 0,
            interval: 0
        };
    }
    componentDidMount() {
        const interval = setInterval(this.incrementCount, 1000);
        this.setState({ interval });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    componentDidUpdate(prevState) {
        if (prevState.count === 10) {
            this.setState({ count: 0 });
        }
    }
    render() {
        return (<div>
    <h1>Bài 10</h1>
    <p>Count: {this.state.count}</p>
  </div>);
    }
}
exports.default = Bai10;
