import React, { useState } from 'react'

export default function Bai4() {
    const [status,setStatus]= useState<boolean>(true)
    const toggle = () =>{
        setStatus (!status) 
    }
  return (
    <div>
        <br />
      <h1>Bài 4</h1>
      <button onClick={toggle}>
        { status ? "Ẩn" : "Hiện"}
      </button>
      {status && <h3>Tiêu đề văn bản</h3>}
      
    </div>
  )
}
