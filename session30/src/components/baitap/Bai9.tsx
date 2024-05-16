import React, { useState } from 'react'
export default function Bai9() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleInputChange = (event:any) => {
        const { name, value } = event.target;
        //gom lại một số lượng không xác định các tham số thành một mảng."spread operator"
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log('Email:', formData.email);
        console.log('Password:', formData.password);
      };
    
      return (
        <form onSubmit={handleSubmit}>
        <h1>Bài 9</h1>
        <div className="all">
            <h2>From</h2>
                <div>
                    <label htmlFor="email" className="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="inp"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </div> <br /><br />
                <div>
                    <label htmlFor="password" className="pw">Password:</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    />
                </div><br />
                <button type="submit">Submit</button>
        </div>
        <h3>Email: <span>{formData.email}</span></h3>
        <h3>Mật khẩu: <span>{formData.password}</span></h3>
        </form>
      );
}
