import React from "react";
import { useSelector } from "react-redux";

export default function ListUser() {
  const user: any = useSelector((state) => {
    return state;
  });
  return (
    <>
     <b>Danh sách người dùng</b>
      <table border={1}>
        <thead>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới Tính</th>
          <th>Ngày sinh</th>
          <th>Địa Chỉ</th>
          <th>Chức năng</th>
        </thead>
        <tbody>
          {user.listUserReducer.map((item: any) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.date}</td>
                <td>{item.address}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </>
  );
}
