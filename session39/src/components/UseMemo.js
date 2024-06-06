"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function UseMemo() {
    return (<div>
    {/*
            - memo đây không phải là 1 hook được gọi là HOC (higher order component ):hàm bậc cao
            - memo cơ chế hoặt động là sẽ đi kiểm tra xem trong component có
            promt nào thay đổi hay không nếu thay đổi thì component sẽ re-render còn ko thì thôi
        */}
    </div>);
}
exports.default = UseMemo;
