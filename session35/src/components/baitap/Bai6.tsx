import React, { useState } from 'react'

export default function Bai6() {
    const [count, setCount] = useState(0);
    // const decrease = () => {
    //     setCount(pre => pre - 1);
    //   };

    

    return (
        <div>
            <h1>Bài 6 </h1>
          <b>Bạn đã click {count} lần</b> <br />
          {/* <button onClick={decrease}>Click để giảm số lần click</button>  */}
          <button onClick={()=> setCount (count + 1)}>Click để tăng số lần click</button>
        </div>
      );
}

