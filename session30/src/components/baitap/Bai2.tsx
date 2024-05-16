import React, { useState } from 'react'

export default function Bai2() {
    const [input,setInput]= useState('');
    const handleChangeInput = (event: any) => {
        setInput(event.target.value);
        console.log(input);
    }
  return (
    <div>
      <h1>Bài 2</h1>
      <h3>Dữ liệu người dùng đăng nhập: <span>{input}</span></h3>
      <input type="text" value={input} onChange={handleChangeInput} placeholder='Nhập dữ liệu '/>

    </div>
  )
}
 