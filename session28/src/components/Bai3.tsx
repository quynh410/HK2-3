import React, { useState } from 'react'

export default function Bai3() {
    const [user,setUser]=useState([
        { id:1, name:"Nguyễn Minh Sơn", address:"Hà nội"},
        { id:2, name:"Hoa", address:"Thanh Xuân"},
        { id:3, name:"Nguyễn Văn A", address:"Cầu Giấy"},
      
    ]);
  return (
    <div>
        <h1>Bài 3</h1>
      <h2>Danh sách người dùng</h2>
      <ul>
        {user.map((item,index)=>{
          return  <li key={index}>{item.id}. Họ và tên: {item.name} - {item.address}</li>
        })}
      </ul>
    </div>
  )
}
