"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const btnPrimary = "primary";
const btnDanger = "danger";
const btnSuccess = "success";
const btnWarning = "warning";
function Button({ title, type, size }) {
    return (<>
        <button className={`btn btn-${type === btnPrimary ? btnPrimary : type === btnDanger ? btnDanger : type === btnSuccess ? btnSuccess : btnWarning}`}>
            {title}</button>
    </>);
}
exports.default = Button;
