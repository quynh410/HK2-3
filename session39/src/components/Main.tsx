import React, { memo } from 'react'
interface Props{
    getIdproduct:Function
}
function Main(props:Props) {
    console.log('Gọi function ra !!! ', props.getIdproduct);
    
  return (
    <div>
      
    </div>
  )
}

export default memo(Main);
