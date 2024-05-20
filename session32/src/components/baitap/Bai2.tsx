import React, { useState } from 'react'

export default function Bai2() {
    const [color, setColor] = useState<string>('');
    const [hexColor, setHexColor] = useState<string>('');
  
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setColor(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setHexColor(`${color.slice(1)}`);
    };
  
    return (
      <div>
        <h1>Bài 2</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Color:
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {hexColor && (
          <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: hexColor,
              marginTop: '20px',
            }}
          >
            {hexColor}
          </div>
        )}
      </div>
    );
  
}


