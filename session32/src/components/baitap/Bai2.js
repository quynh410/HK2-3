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
function Bai2() {
    const [color, setColor] = (0, react_1.useState)('');
    const [hexColor, setHexColor] = (0, react_1.useState)('');
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setHexColor(`#${color.slice(1)}`);
    };
    return (<div>
        <h1>Bài 2</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Color:
            <input type="color" value={color} onChange={handleColorChange}/>
          </label>
          <button type="submit">Submit</button>
        </form>
        {hexColor && (<div style={{
                width: '100px',
                height: '100px',
                backgroundColor: hexColor,
                marginTop: '20px',
            }}>
            {hexColor}
          </div>)}
      </div>);
}
exports.default = Bai2;
