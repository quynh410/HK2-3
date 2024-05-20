import React, { useState } from 'react'
interface User {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
export default function bai6() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user: User = {
        name,
        email,
        password,
        confirmPassword,
        };
        console.log(user);
    };
  return (
    <>
            <h1>Bài 6</h1>
        <form onSubmit={handleSubmit} className='all'>
            <br />
        <div>
        <label>Tên:</label>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        </div> <br />
        <div>
        <label>Email:</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div> <br />
        <div>
        <label>Mật khẩu:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div> <br />
        <div>
        <label>Nhập lại mật khẩu:</label>
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        </div> <br />
        <button type="submit">Đăng ký</button>
    </form>
    
    </>
    );
  
}
