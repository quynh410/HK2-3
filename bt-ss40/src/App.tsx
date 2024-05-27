import React from 'react'
import ListStudent from './components/students/ListStudent'
import './App.css'
export default function App() {
  return (
    <>
      <>
    <ListStudent></ListStudent>
  {/* Form thêm mới nhân viên */}
  <div className="overlay" hidden>
    <form className="form">
      <div className="d-flex justify-content-between align-items-center">
        <h4>Chỉnh sửa nhân viên</h4>
        <i className="fa-solid fa-xmark" />
      </div>
      <div>
        <label className="form-label" htmlFor="userName">
          Họ và tên
        </label>
        <input id="userName" type="email" className="form-control" />
        {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
      </div>
      <div>
        <label className="form-label" htmlFor="dateOfBirth">
          Ngày sinh
        </label>
        <input id="dateOfBirth" type="date" className="form-control" />
      </div>
      {/* <div class="form-text error">
    Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
      <div>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input id="email" type="text" className="form-control" />
      </div>
      {/* <div class="form-text error">Email không được để trống.</div> */}
      <div>
        <label className="form-label" htmlFor="address">
          Địa chỉ
        </label>
        <textarea
          className="form-control"
          id="address"
          rows={3}
          defaultValue={""}
        />
      </div>
      <div>
        <button className="w-100 btn btn-primary">Thêm mới</button>
      </div>
    </form>
  </div>
  {/* Modal xác nhận chặn tài khoản */}
  <div className="overlay" hidden>
    <div className="modal-custom">
      <div className="modal-title">
        <h4>Cảnh báo</h4>
        <i className="fa-solid fa-xmark" />
      </div>
      <div className="modal-body-custom">
        <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
      </div>
      <div className="modal-footer-custom">
        <button className="btn btn-light">Hủy</button>
        <button className="btn btn-danger">Xác nhận</button>
      </div>
    </div>
  </div>
  {/* Modal xác nhận xóa tài khoản */}
  
</>

    </>
  )
}
