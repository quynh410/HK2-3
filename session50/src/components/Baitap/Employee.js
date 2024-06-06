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
const react_router_dom_1 = require("react-router-dom");
const Employee = () => {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const [searchInput, setSearchInput] = (0, react_1.useState)('');
    const [studentName, setStudentName] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const name = searchParams.get('studentName');
        if (name) {
            setStudentName(name);
        }
    }, [searchParams]);
    const handleSearch = () => {
        setSearchParams({ studentName: searchInput });
    };
    return (<div>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Nhập từ khóa tìm kiếm"/>
      <button onClick={handleSearch}>Tìm kiếm</button>
      <p>
        <a href={`http://localhost:5173/employee?studentName=${searchInput}`}>
        </a>
      </p>
      {studentName && (<p>Tên sinh viên: {studentName}</p>)}
    </div>);
};
exports.default = Employee;
