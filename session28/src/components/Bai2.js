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
class Bai2 extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: 'Nguyễn Thị Thu Quỳnh',
            date: '04/01/2005',
            address: 'Thanh Xuân, Hà Nội'
        };
    }
    render() {
        return (<div>
            <h1>Bài 2</h1>
            <h2>Thông tin cá nhân</h2>
            <p>id: {this.state.id}</p>
            <p>Họ và tên: {this.state.name}</p>
            <p>Ngày sinh: {this.state.date}</p>
            <p>Đỉa chỉ: {this.state.address}</p>
          </div>);
    }
}
exports.default = Bai2;
