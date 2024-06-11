import axios from 'axios'
import React, { useEffect } from 'react'

export default function Find() {
    useEffect(()=>{
        let value: string = "o"
        axios.get(`http://localhost:8080/users?name_like=${value}`)
        .then(response => [
            console.log(response.data)
        ])
        .catch(err => console.log(err)
        )
    },[])
  return (
    <div>
      
    </div>
  )
}
