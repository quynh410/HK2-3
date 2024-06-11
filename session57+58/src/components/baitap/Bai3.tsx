import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface Students{
    id:number;
    student_name:string;
    email:string;
    address:string;
    phone:string;
    status:boolean;
    created_at:string;
}
export default function Bai3() {
    const [students,setStudents]=useState<Students | null>(null)
        useEffect(()=>{
            const getAllStudent = async ()=>{
                try{
                    const response = await axios.get("http://localhost:8080/students/1")
                    setStudents(response.data)
                    console.log(response.data)
                }catch(err){
                    console.log("Lỗi")
                }
            }
            getAllStudent();
        },[])
        
  return (
    <div>
        <h1>Bài 3</h1>
        <li>{students?.id} </li>
        <li>{students?.student_name}</li>       
        <li>{students?.email}</li>
        <li>{students?.address}</li>
        <li>{students?.phone}</li>
        <li>{students?.status}</li>
        <li>{students?.created_at}</li>
    </div>
  )
}

