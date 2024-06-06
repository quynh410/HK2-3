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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
const react_1 = __importStar(require("react"));
const A_1 = __importDefault(require("./A"));
exports.context = (0, react_1.createContext)("");
function UseContext() {
    const [name, setName] = (0, react_1.useState)('trang');
    //dùng props để gửi dữ liệu 
    //bên component E nhận được giá trị trang
    return (<div>
      {/*
          sinh ra giúp việc truyền dữ liệu giữa các components có quan hệ cha con được nhanh hơn , dễ dàng hơn không phải truyền theo kiểu props bình thường
          - các component phải có quan hệ cha con
              + Taoj 1 biến gán - createContext('') -- Export biến
              + dùng biến này bọc component
              <Biến.Provider value={}>
              + component con muốn nhận data
              import biến vào
              useContext(Biến bên trên export)
        */}
      <exports.context.Provider value={name}>
        <A_1.default></A_1.default>
      </exports.context.Provider>
    </div>);
}
exports.default = UseContext;
