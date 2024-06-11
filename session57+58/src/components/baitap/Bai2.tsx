import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface Students{
    id:number;
    student_name:string;
    email:string;
    address:string;
    phone:string;
    status:boolean;
    created_at:Date;
}
export default function Bai2() {
    const [students,setStudents]=useState<Students[]>([])
        useEffect(()=>{
            const getAllStudent = async ()=>{
                try{
                    const response = await axios.get("http://localhost:8080/students")
                    setStudents(response.data)
                    console.log(response.data)
                }catch(err){
                    console.log("loi")
                }
            }
            getAllStudent();
        },[])
        
  return (
    <div>
        <li>
            <h1>Bài 2</h1>
            {students.map((student)=>{
                return(
                    <li key={student.id}>{student.student_name}</li>
                )
            })}
        </li>
    </div>
  )
}

