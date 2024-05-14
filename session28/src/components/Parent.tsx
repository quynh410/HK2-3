import React from 'react'
import Child from './Child'
interface Props {
    a:string;
    b:number;
}
export default function Parent(c:Props) {
    console.log(11111,c);
    
  return (
    <div>Parent
      <Child></Child>
      <p>xin chao {c.a} nam nay toi {c.b}</p>
    </div>
  )
}
