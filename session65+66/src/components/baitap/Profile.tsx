import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const profile:any = useSelector((state)=>{
        return state;
    })
    
  return (
    <div>
        <b>Thông tin cá nhân</b>
      {
        profile.profileReducer.map((item:any)=>{    
            return (
                <ul key={item.id}>
                    <li>{item.userName}</li>
                    <li>{item.gender}</li>
                    <li>{item.date}</li>
                    <li>{item.address}</li>
                </ul>
            )        
        })
      }
    </div>
  )
}
