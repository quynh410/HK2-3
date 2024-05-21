import React, { useState } from 'react'

export default function Bai8() {
    const [select,setSelect]=useState<string>('');
    const handleChange=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelect(event.target.value);
    }
  return (
    <>
    <div>
      <h1>Bài 8</h1>
        <p>Thành Phố : <b>{select}</b></p>
      <select onChange={handleChange} name="" id="">
        <option value="">--Chọn Tỉnh/Thành Phố--</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thành Hóa">Thanh Hóa</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
    </>
    
  )
}
