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
function UseMemo() {
    const [count, setCount] = (0, react_1.useState)(0);
    const [cart, setCart] = (0, react_1.useState)([
        {
            product: "iphone 5",
            price: 1000,
            quantity: 2
        },
        {
            product: "iphone 6",
            price: 2000,
            quantity: 6
        },
        {
            product: "iphone 7",
            price: 3000,
            quantity: 8
        }
    ]);
    let memo = (0, react_1.useMemo)(() => {
        let payMent = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        return payMent;
    }, [cart]);
    const addToCart = () => {
        let newProduct = {
            product: "iphone 8",
            price: 8000,
            quantity: 2
        };
        cart.push(newProduct);
        setCart([...cart]);
    };
    return (<div>
        <p>Giá tiền : {memo}</p>
      {/*
        Đây là 1 hook giúp ghi
       */}
     <button onClick={() => setCount(count + 1)}>Click</button>
     <button onClick={addToCart}>Mua</button>
    </div>);
}
exports.default = UseMemo;
