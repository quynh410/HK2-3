// CÁCH 1


// import React, { useState } from 'react';

// export default function Bai5() {
//     const [status, setStatus] = useState<boolean>(true);

//     const toggle = () => {
//         setStatus(!status);
//     };

//     return (
//         <div>
//             <div>
//                 <br />
//                 <h1>Bài 5</h1>
//                 <button onClick={toggle}>
//                     {status ? 'Hiển' : 'Ẩn'}
//                 </button>
//             </div>
//         </div>
//     );
// }


// CÁCH 2
import React, { useState } from 'react'

export default function Bai5() {
    const [status, setStatus] = useState<boolean>(true);

  return (
    <div>
        <h1>Bài 5</h1>
      {
        status? <button>Hiển</button> : <button>Ẩn</button>
      }
      <button onClick={()=>setStatus(!status)}>Click</button>
    </div>
  )
}
