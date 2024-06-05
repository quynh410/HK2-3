import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const register = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      Đăng kí
      <form onSubmit={register}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <br />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
