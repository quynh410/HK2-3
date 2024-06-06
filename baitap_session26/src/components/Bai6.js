"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FormatName = () => {
    const user = {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam',
    };
    const formatName = () => {
        return `${user.firstName} ${user.lastName}`;
    };
    return <div>{formatName()}</div>;
};
exports.default = FormatName;
