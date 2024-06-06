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
function Bai5() {
    const [productCode, setProductCode] = (0, react_1.useState)('');
    const [productName, setProductName] = (0, react_1.useState)('');
    const [price, setPrice] = (0, react_1.useState)(0);
    const [quantity, setQuantity] = (0, react_1.useState)(10);
    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            productCode,
            productName,
            price,
            quantity,
        };
        console.log(product);
    };
    return (<form onSubmit={handleSubmit}>
        <h1>Bài 5 </h1>
        <div className='all'>
        <div> <br />
          <label>Mã sản phẩm:</label>
          <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>Tên sản phẩm:</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
        </div>
        <br />
        <div>
          <label>Giá:</label>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
        </div>
        <br />
        <div>
          <label>Số lượng:</label>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <br />
        <button type="submit">Đăng ký</button>

        </div>
      </form>);
}
exports.default = Bai5;
