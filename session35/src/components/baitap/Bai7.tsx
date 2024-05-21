import React, { useState } from 'react'

export default function Bai7() {
    const [text,setText]=useState<string>('')
    const handleTextChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.target.value)
    }
  return (
    <div>
        <br />
        <h1>Bài 7</h1>
       <textarea 
        value={text} 
        onChange={handleTextChange} 
      />
      <p>Số kí tự : {text.length}</p>
    </div>
  )
}
