import React, { useState } from 'react'

export default function Bai9() {
    const [gender,setGender]= useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
    }
  return (
    <div>
      <h1>Bài 9</h1>
      <p>Giới Tính: <b>{gender}</b></p>
      <input onChange={handleChange} type="radio" value='Nam' checked={gender === 'Nam'}/> Nam <br />
      <input onChange={handleChange} type="radio" value='Nữ'checked={gender === 'Nữ'}/> Nữ <br />
      <input onChange={handleChange} type="radio" value='Khác' checked={gender === 'Khác'}/> Khác <br />
    </div>
  )
}
