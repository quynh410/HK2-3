import React from 'react'

export default function Bai1() {
   const handleClick = ():void=>{
        console.log("Clicked");
        alert("Clicked");
        
    }
  return (
    <div>
        <h1>Bài 1</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

