import React, { useCallback, useState } from 'react'

export default function B6() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const handleSubmit = useCallback((event:any) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    }, [email, password]);
  
    return (
      <div>
        <h1>Bài 6 /38</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div> <br />
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
