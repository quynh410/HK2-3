import React, { useState } from 'react'

export default function Bai2() {
    const [input,setInput]= useState<string>('');
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }
  return (
    <div>
      <h1>Bài 2</h1>
      <h3>Dữ liệu người dùng đăng nhập: <span>{input}</span></h3>
      <input type="text" value={input} onChange={handleChangeInput} placeholder='Nhập dữ liệu '/>

    </div>
  )
}
 