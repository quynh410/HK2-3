import React, { useCallback, useState } from 'react'

export default function B3() {
    const [color, setColor] = useState('#000000');
    const handleChangeColor = useCallback((event:any) => {
      setColor(event.target.value);
    }, []);
  
    return (
      <div>
        <h1>Bài 3 / 38</h1>
        <b>Màu người dùng chọn:</b>
        <input
          type="color"
          value={color}
          onChange={handleChangeColor}
        />
        <p>Màu đã chọn: <span style={{ color }}>{color}</span></p>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            border: '1px solid #000',
            marginTop: '10px'
          }}
        />
      </div>
    );
}
