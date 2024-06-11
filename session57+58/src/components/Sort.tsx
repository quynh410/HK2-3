import axios from 'axios'
import React, { useEffect } from 'react'

export default function Sort() {
    useEffect(()=>{
        // sap xep theo tuoi tang dan trong bang users
        axios.get("http://localhost:8080/users?_sort=age&_order=asc")
        .then(res=> console.log("sau khi sap xep age tang dan", res.data)
       
        ) .catch(err => console.log(err))
    },[])
  return (
    <div>
      
    </div>
  )
}
