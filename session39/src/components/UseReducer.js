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
function UseReducer() {
    let initial = {
        count: 0,
        product: {},
        products: {},
        isLoading: false,
    };
    const reducer = (state, action) => {
        switch (action) {
            case "increase":
                return state + 1;
            case "decrease":
                return state - 1;
            default:
                return state;
        }
    };
    let initialCount = 0;
    const [state, dispatch] = (0, react_1.useReducer)(reducer, initialCount);
    const handleIncrease = () => {
        dispatch('increase');
    };
    const handleDecrease = () => {
        dispatch('decrease');
    };
    console.log("11111");
    return (<div>
            <p>Giá trị biến cao : {state}</p>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>);
}
exports.default = UseReducer;
