import React, { useState } from 'react'

export default function Bai11() {
    const [tooltip, setTooltip]= useState(false);
    const hoverBtnEnter = () => {
        setTooltip(true);
    }
    const hoverBtnLeave = () => {
        setTooltip(false);
    }
  return (
    <div>
        <p>********************************************************************</p>
        <h1>Bài 11</h1>
        <button style={{width:'200px', height:'50px'}}
        onMouseEnter={hoverBtnEnter}
        onMouseLeave={hoverBtnLeave}>
            Hover Me
        </button>
        {tooltip && <div style={{ backgroundColor: 'lightgray', height:'50px', width:'200px', textAlign:'center' }}>Button</div>}

    </div>
  )
}

