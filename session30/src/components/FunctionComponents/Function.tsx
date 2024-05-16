import React, { Component, useState } from 'react'

export default function Function() {
    const [name,setName]= useState <string>("Hoa");

    /*

        Event: sự kiện 
        onclick 
        onchange
        oninput
        onkeydown
        onkeyup
        .......

    */ 
   // nơi khai báo các hàm: dùng các từ khóa khai báo let, const, var
   const handleChange=()=>{
    console.log(handleChange);
    //xử lí
        setName("hương");
        // khi xét name thì  component re-render lại 1 lần
   }
  return (
    <div>
        <p>{name}</p>
        <button onClick={handleChange}>click</button>
    </div>
  )
}
