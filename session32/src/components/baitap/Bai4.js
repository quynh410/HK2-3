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
function Bai4() {
    const [progress, setProgress] = (0, react_1.useState)(0);
    const [subPro, setSubPro] = (0, react_1.useState)(null);
    const handleChange = (event) => {
        setProgress(Number(event.target.value));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubPro(progress);
    };
    return (<div>
            <h1>Bài 4</h1>
            <form onSubmit={handleSubmit}>
                <p>Tiến độ hoàn thành : {progress} %</p>
                <div>
                    <input type="range" id="progress" value={progress} min="0" max="100" onChange={handleChange}/>
                    <span>{progress}%</span>
                </div>
                <button type="submit">Submit</button>
            </form>
            {subPro !== null && (<div>
                    <h3>Tiến độ hoàn thành : {subPro}%</h3>
                </div>)}
        </div>);
}
exports.default = Bai4;
