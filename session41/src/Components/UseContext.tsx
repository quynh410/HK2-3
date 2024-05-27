import React, { createContext, useState } from 'react'
import A from './A'
export const context = createContext("");
export default function UseContext() {
    const[name,setName]=useState<string>('trang');
    //dùng props để gửi dữ liệu 
    //bên component E nhận được giá trị trang
  return (
    <div>
      {/* 
        sinh ra giúp việc truyền dữ liệu giữa các components có quan hệ cha con được nhanh hơn , dễ dàng hơn không phải truyền theo kiểu props bình thường
        - các component phải có quan hệ cha con
            + Taoj 1 biến gán - createContext('') -- Export biến 
            + dùng biến này bọc component
            <Biến.Provider value={}>
            + component con muốn nhận data
            import biến vào
            useContext(Biến bên trên export)
      */}
      <context.Provider value={name}>
        <A></A>
      </context.Provider>
    </div>
  )
}
