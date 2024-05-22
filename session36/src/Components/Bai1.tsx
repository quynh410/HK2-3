import React, { useEffect, useState } from 'react'

export default function Bai1() {
    const [tittle, setTittle]= useState<string>('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTittle(e.target.value)
       
    }
    useEffect(()=>{
         document.title = tittle;
    })
  return (
    <div>
      <h1>Bài 1</h1>
      <input 
               type="text" 
               value={tittle} 
               onChange={handleInputChange} 
               placeholder="Nhập tiêu đề"
             />
    </div>
  )
}
