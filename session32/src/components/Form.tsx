import React, { useState } from 'react'

export default function Form() {
    const[name, setName]= useState<String>('');
    const[email, setEmail]= useState<String>('');
    const handleClick = () => {
        console.log('click')
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log('change')
        console.log(e.target.value)
        // cập nhập state
        setName (e.target.value);
    }
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);

    }
  return (
    <div>
    {/* 
    các kĩ thuật xử lý trong form 
    - Có 2 kĩ thuật xử lí chính
    1. controller
        + Lấy dữ liệu ng dùng nhâpj vào ô input 
        + lấy dữ liệu khi ng dùng nhập vào ô text Area
        + Chọn select- option
        - ở trong funtion component muốn quản lí dữ liệu ( trạng thái ) dùng useState
    2. uncontroller'
    */}
      <div>
        <label htmlFor="">Tên : </label>
        <input 
            onChange={handleChange}
            type="text" 
        />
        <p>Tên người dùng nhập : <b>{name}</b></p>
        <label htmlFor="">Email: </label>
        <input 
        type="text" 
        onChange={handleChangeEmail}
        />
        <p>Email người dùng nhập: <b> {email}</b></p>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  )
}
