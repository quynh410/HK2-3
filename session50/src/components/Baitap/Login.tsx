import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const user = {
    email: "test@example.com",
    password: "password123",
    role: "admin"
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (email === user.email && password === user.password && role === user.role) {
      setAuthenticated(true);
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không chính xác.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <button type="submit">Đăng nhập</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
