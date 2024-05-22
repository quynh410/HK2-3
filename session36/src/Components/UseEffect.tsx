import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count , setCount ]= useState <number>(0)
    const [name, setName]=useState<string>('Minh thu')
    
    useEffect(()=>{
        console.log('useEffect được gọi')
        // thường dùng để call API
    },[count]);
    const handleClick = () => {
        setCount(count+1)
    }
  return (
    <div>
      <p>Giá trị biến count : {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
