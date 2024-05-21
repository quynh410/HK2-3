import React, { useState } from "react"
interface User{
    email: string;
    userName: string;
    password: string;
    
}
export default function FormAdvanced() {
    const [email,setEmail]=useState<string>("");
    const [userName,setUsername]=useState<string>("");
    // cách xử lí tối ưu hơn
    const [user, setUser ]= useState<User>({
        email:"",
        userName:"",
        password:"",
})
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        let value = event.target.value;
        let name = event.target.name;   
        setUser({
           ...user,
            [name]:value,
        })        
    }
    console.log("Gía trị user", user);
    
  return (
    <div>
        <h1>Form Advanced </h1>
        <br />
      <label htmlFor="">Email : </label>
      <input 
        name="email"
        onChange={handleChange}
        type="text" 
      /> <br /> <br />
      <label htmlFor="">Username : </label>
      <input 
        name="userName"
        onChange={handleChange}
        type="" 
      /> <br /> <br />
      <label htmlFor="">Password : </label>
      <input
        name="password"
        onChange={handleChange}
        type="text" 
      /> <br /> <br />
      <label htmlFor="">ConfirmPassword : </label>
      <input
        name="confirmPassword"
        onChange={handleChange}
        type="text" 
      /> <br /> <br />
      <button>Register</button>
    </div>
  )
}
