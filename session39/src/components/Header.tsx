import React, { memo } from 'react'
interface Props{
    //gọi từ bên cha
    counts:boolean;
}
function Header(props:Props) {
    console.log('Giá trị biến cao ở bên component App :',);
    
  return (
    <div>
      <p>Giá trị count : {props.counts}</p>
    </div>
  )
}
export default memo(Header);