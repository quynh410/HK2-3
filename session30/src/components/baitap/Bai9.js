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
function Bai9() {
    const [formData, setFormData] = (0, react_1.useState)({
        email: '',
        password: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //gom lại một số lượng không xác định các tham số thành một mảng."spread operator"
        setFormData(Object.assign(Object.assign({}, formData), { [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', formData.email);
        console.log('Password:', formData.password);
    };
    return (<form onSubmit={handleSubmit}>
        <h1>Bài 9</h1>
        <div className="all">
            <h2>From</h2>
                <div>
                    <label htmlFor="email" className="email">Email:</label>
                    <input type="email" id="email" name="email" className="inp" value={formData.email} onChange={handleInputChange} required/>
                </div> <br /><br />
                <div>
                    <label htmlFor="password" className="pw">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required/>
                </div><br />
                <button type="submit">Submit</button>
        </div>
        <h3>Email: <span>{formData.email}</span></h3>
        <h3>Mật khẩu: <span>{formData.password}</span></h3>
        </form>);
}
exports.default = Bai9;
