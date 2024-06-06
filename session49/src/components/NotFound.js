"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function NotFound() {
    return (<div className='flex justify-center items-center h-screen font-bold'>
      <div className='text-center'>
        <h1 className='text-[100px]'>404</h1>
        <b>Not Found</b>
      </div>
    </div>);
}
exports.default = NotFound;
