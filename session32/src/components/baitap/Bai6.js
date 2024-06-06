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
function bai6() {
    const [name, setName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            name,
            email,
            password,
            confirmPassword,
        };
        console.log(user);
    };
    return (<>
            <h1>Bài 6</h1>
        <form onSubmit={handleSubmit} className='all'>
            <br />
        <div>
        <label>Tên:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div> <br />
        <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div> <br />
        <div>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div> <br />
        <div>
        <label>Nhập lại mật khẩu:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div> <br />
        <button type="submit">Đăng ký</button>
    </form>
    
    </>);
}
exports.default = bai6;
