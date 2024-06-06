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
function B3() {
    const [color, setColor] = (0, react_1.useState)('#000000');
    const handleChangeColor = (0, react_1.useCallback)((event) => {
        setColor(event.target.value);
    }, []);
    return (<div>
        <h1>Bài 3 / 38</h1>
        <b>Màu người dùng chọn:</b>
        <input type="color" value={color} onChange={handleChangeColor}/>
        <p>Màu đã chọn: <span style={{ color }}>{color}</span></p>
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            border: '1px solid #000',
            marginTop: '10px'
        }}/>
      </div>);
}
exports.default = B3;
