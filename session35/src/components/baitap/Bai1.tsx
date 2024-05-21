import React, { useState } from 'react'
interface Namee{
    name:string;
}
export default function Bai1() {
    const [name, setName] = useState <Namee> ({
        name:'Nguyễn Thị Thu Quỳnh'
    });
  return (
    <div>9`
      <h1>Bài 1 </h1>
      <b>Họ và tên : {name.name}</b>
    </div>
  )
}
