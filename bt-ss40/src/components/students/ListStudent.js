"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StudentItem_1 = __importDefault(require("./StudentItem"));
const Button_1 = __importDefault(require("../base/Button"));
function ListStudent() {
    return (<>
      <div className="w-[80%] m-auto mt-4 h-[100vh]">
        <main className="main">
          <header className="d-flex justify-content-between mb-3">
            <h3>Nhân viên</h3>
            <Button_1.default title='Thêm mới nhân viên' type="danger" size="lagrge"></Button_1.default>
          </header>
          <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <input style={{ width: 350 }} type="text" className="form-control" placeholder="Tìm kiếm theo email"/>
            <i className="fa-solid fa-arrows-rotate" title="Refresh"/>
          </div>
          {/* Danh sách nhân viên */}
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th colSpan={2}>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              <StudentItem_1.default></StudentItem_1.default>
            </tbody>
          </table>
          <footer className="d-flex justify-content-end align-items-center gap-3">
            <select className="form-select">
              <option selected>Hiển thị 10 bản ghi trên trang</option>
              <option>Hiển thị 20 bản ghi trên trang</option>
              <option>Hiển thị 50 bản ghi trên trang</option>
              <option>Hiển thị 100 bản ghi trên trang</option>
            </select>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
    </>);
}
exports.default = ListStudent;
