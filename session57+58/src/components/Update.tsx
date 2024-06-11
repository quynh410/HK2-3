import axios from 'axios'
import React, { useEffect } from 'react'

export default function Update() {
    useEffect(()=>{
        // khi update phai biet duoc id cua doi tuong can update

        // axios.put("http://localhost:8080/users")
        axios.patch("http://localhost:8080/users/5",{name:"Cheng Cheng"})
    },[])
  return (
    <div>
      {/* khi update dungf 2 phuong thuc PUT/PATCH 
            + PUT : update tat ca
            + PATCH : update 1 truong */}
    </div>
  )
}
