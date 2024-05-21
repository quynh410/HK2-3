import React from 'react'
export default function SelectOption() {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    }
  return (
    <div>
      <h1>Select Option</h1>
      <p>Tỉnh/ Thành Phố: {}</p>
      <select onChange={handleChange} name="" id="">
        <option value="">Chọn tỉnh/ thành phố</option>
        <option value="HN">Hà Nội</option>
        <option value="HCM">Hồ Chí Minh</option>
        <option value="QN">Quảng Ninh</option>
      </select>
    </div>
  )
}
