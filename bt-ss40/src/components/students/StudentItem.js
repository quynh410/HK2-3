"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function StudentItem() {
    return (<>
      <tr>
        <td>1</td>
        <td>Nguyễn Văn A</td>
        <td>28/02/1990</td>
        <td>nvana@gmail.com</td>
        <td>Ba Đình, Hà Nội</td>
        <td>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="status status-active"/>
            <span> Đang hoạt động</span>
          </div>
        </td>
        <td>
          <span className="button button-block">Chặn</span>
        </td>
        <td>
          <span className="button button-edit">Sửa</span>
        </td>
        <td>
          <span className="button button-delete">Xóa</span>
        </td>
      </tr>
    </>);
}
exports.default = StudentItem;
