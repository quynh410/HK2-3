import React, { useState } from 'react'

export default function Function() {
    const [fullName,setFullName]=useState<string>("hoa");
    const [age,setAge]=useState<number>(13);
    const [students,setStudents]=useState<string[]>([]);
    const [isActive,setActive]=useState<boolean>(true);
    const handleChange=()=>{
        setAge(14);
        setFullName("hường");
    }
    // const fullName:string = "hoa"
    //khai báo hàm trên return() phải thêm let const var
  return (
    <>
     <div>
      <p>State : dùng để quản lí dữ liệu trong component</p>
      <p>Đối với function để quản lí dữ liệu dùng useState đây là 1 hook sinh ra giúp function có thể quản lí dữ liệu</p>
    </div>
    <p>{fullName} năm nay {age} tuổi</p>
    <button onClick={handleChange}>change</button>
    </>
  )
}
