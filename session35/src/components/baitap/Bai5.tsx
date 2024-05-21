import React, { useState } from 'react'

export default function Bai5() {
    const [form,setForm]= useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm(e.target.value)
    }
  return (
    <div>
        <br />
      <h1>Bài 5</h1>
      <input 
      value={form}
      onChange={handleChange}
      type="text" 
      placeholder='Nhập nội dung'
      /> <br /> <br />
      <b>{form}</b>
    </div>
  )
}