import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function RandomNumber() {
    const dispatch = useDispatch();
    const randomNumbers:any = useSelector((state) =>{
        return state;
    });
    const randomNumber = ()=>{
        const randomNumber = Math.floor(Math.random() * 100);
        dispatch({
            type: "RANDOM_NUMBER",
            payload: randomNumber
        })
    }
  return (
    <div>
    <button onClick={randomNumber}>Generate Random Number</button>
    <ul>
      {randomNumbers.map((item:any) => (
        <div key={item.id}>{item.randomNumber}</div>
      ))}
    </ul>
  </div>
  )
}

