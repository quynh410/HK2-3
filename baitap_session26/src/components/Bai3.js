"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class PersonalInfo extends react_1.default.Component {
    render() {
        const user = {
            name: "Nguyễn Văn A",
            gender: "Nam",
            date: "06/03/2034",
            email: "nguyenvana@gmail.com",
            address: "Thanh Xuân, Hà Nội"
        };
        return (<div>
        <h1>Thông tin cá nhân</h1>
        <p>Họ và tên: {user.name}</p>
        <p>Giới tính:{user.gender}</p>
        <p>Ngày sinh: {user.date}</p>
        <p>Email: {user.email}</p>
        <p>Địa chỉ: {user.address}</p>
      </div>);
    }
}
exports.default = PersonalInfo;
