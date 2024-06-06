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
class Bai11 extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="overlay">
        <div className="modal-container">
          <header className="modal-header">
            <h3 className="modal-header-title">{this.props.title}</h3>
            {/* <CloseOutlined onClick={this.props.close}/> */}
          </header>
          <main className="modal-main">
            <img className="modal-icon" src="https://cdn-icons-png.freepik.com/512/7518/7518748.png" alt=""/>
            <p className="modal-content">{this.props.content}</p>
          </main>
          <footer className="modal-footer">
            <button className="button button-secondary" onClick={this.props.close}>Hủy</button>
            <button className="button button-danger" onClick={this.props.deleteJob}>Xóa</button>
          </footer>
        </div>
      </div>);
    }
}
exports.default = Bai11;
