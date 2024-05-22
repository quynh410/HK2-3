import React, { useEffect, useState } from 'react'

export default function Bai7() {
    const [count, setCount] = useState(0);
    const [prevCountRef , setPrevCountRef] = useState(0);
    const handleClick = () => {
        setCount(count + 1); 
        setPrevCountRef(count); 
    };
    return (
      <div>
        <h1>Bài 7</h1>
        <p>Giá trị trước: {prevCountRef}</p>
        <p>Giá trị hiện tại: {count}</p>
        <button onClick={handleClick}>Tăng</button>
      </div>
    );
}



