import React, { useState } from 'react'

export default function Bai3() {
    const [color, setColor] = useState('black');

    const handleChangeColor = () => {
      setColor(ChangeColor => 
        (ChangeColor === 'black' ? 'red' : 'black')
    );
};
  
    return (
      <div>
        <h1>Bài 3</h1>
        <p style={{ color }}>Tiêu đề văn bản</p>
        <button onClick={handleChangeColor}>Thay đổi màu</button>
      </div>
    );
}

