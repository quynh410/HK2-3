import React, { useState } from 'react'

export default function Bai1() {
    const [email, setEmail] = useState<string>('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleSubmit = () => {
        alert(`Email submit: ${email}`);
    };
  return (
    <div>
        <div>
            <h1>Bài 1</h1>
            <label htmlFor="">Email: </label>
            <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                />        </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
