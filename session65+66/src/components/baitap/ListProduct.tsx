import React from 'react'
import { useSelector } from 'react-redux'

export default function ListProduct() {
    const product:any = useSelector((state)=>{
        return state;
    })
  return (
    <>
     <h3>Danh sách sản phẩm</h3>
      <table border={1}>
        <thead>
          <th>Id</th>
          <th>Tên sản phẩm</th>
          <th>Giá</th>
          <th>Số lương ( kg )</th>
          <th>Chức năng</th>
        </thead>
        <tbody>
          {product.productReducer.map((item: any) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td> <button>Sửa</button>
                <button>Xóa</button></td>
              </tr>
            );
          })}

        </tbody>
      </table>
    </>
  )
}
