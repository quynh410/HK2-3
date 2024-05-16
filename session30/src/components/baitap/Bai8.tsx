import React, { useState } from 'react'

export default function Bai8() {
    const [count,setCount]= useState<number>(0);
    const handelClick = ()=>{
        setCount(count+1);
    }
  return (
    <div>
      <h1>Bài 8</h1>
      <p></p>
      <button onClick={handelClick}>Click {count} lần</button>
    </div>
  )
}
