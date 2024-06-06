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
function B2() {
    const users = [
        { id: 1, name: 'Quỳnh', age: 19 },
        { id: 2, name: 'Lan Anh', age: 17 },
        { id: 3, name: 'Trang', age: 20 },
        { id: 4, name: 'Phương Anh', age: 18 },
        { id: 5, name: 'Huyền', age: 18 },
    ];
    const adultUsers = (0, react_1.useMemo)(() => {
        return users.filter(user => user.age > 18);
    }, [users]);
    return (<div>
            <h1>Bài 2 /38 </h1>
          <h2>Danh sách người dùng trên 18 tuổi:</h2>
          <ul>
            {adultUsers.map(user => (<li key={user.id}>
                {user.name} -- Age: {user.age}
              </li>))}
          </ul>
        </div>);
}
exports.default = (0, react_1.memo)(B2);
