import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface Students {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
  }
export default function Bai5() {
    const [newStudents, setNewStudents]= useState<Partial<Students>>({
            student_name: "hoa",
            email: "hoa@gmail.com",
            address: "HN",
            phone: "0987656",
            status: true,
            created_at: "2021-03-06"
    })
    useEffect(()=>{
        // let newStudents = {
        //     student_name: "hoa",
        //     email: "hoa@gmail.com",
        //     address: "HN",
        //     phone: "0987656",
        //     status: true,
        // created_at: "2021-03-06"    
        // }
      const createStudents = async ()=>{
        try{
            const response = await axios.post("http://localhost:8080/students", newStudents);
            setNewStudents(response.data);
        }catch(err){
            console.log(err);
        }
    }  
    createStudents();
    },[])
    

  return (
    <div>      
    </div>
  )
}
