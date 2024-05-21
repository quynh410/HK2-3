import React from 'react'

export default function Bai7() {
    const [gender, setGender] = React.useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }

  return (
    <div className='all'>
      <h1>Bài 7</h1>
      <p>Giới tính: {gender}</p>
      <input type="radio" /> <label htmlFor="">Nam</label>
      <input type="radio" /> <label htmlFor="">Nữ</label>
      <input type="radio" /> <label htmlFor="">Khác</label>
      <br />
      <button>Submit</button>
    </div>
  )
}
