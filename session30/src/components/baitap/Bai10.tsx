import React, { useState } from 'react'

export default function Bai10() {
    const [gender, setGender] = useState('Nam');
    const genders = ['Nam', 'Nữ'];
  
    const handleGender = () => {
      const randomIndex = Math.floor(Math.random() * genders.length);
      setGender(genders[randomIndex]);
    };
  
    return (
      <div>
        <h1>Bài 10</h1>
        <h3>Gender: {gender}</h3>
        <button onClick={handleGender}>Random gender</button>
      </div>
    );
}
