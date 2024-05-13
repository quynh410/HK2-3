import React from 'react'

export default function Bai1() {
  let list:string[]= ["HTML", "CSS", "JS", "JSX", "Java"];
  return (
        <>
            <h1>
              Danh sách khóa học
            </h1>
            <ol>
              {list.map((item,index)=>{
                return <li key={index +1}>{item}</li>
              })}
            </ol>
        </>
  )
}

// interface Product {
//   name:string;
//   price:number;
//   id:number;
// }
// interface Product{
//   name:string;
//   price:number;
//   id:number;
// }

// export default function Bai1(){
//   // render dữ liệu đối với function component
//   let fullName:string = "minh thu";
//   let age:number = 20;
//   let allStd = {
//     name : "Hoa",
//     age: 25,
//     address: "Hà Nội"
//   }
//   let number:number[]= [1,4,7,9];
//   let student:string[] = ['thu','ngọc', 'lan ', 'hương'];
//   let product:Product[] =[
//   {
//     name:"iphone5",
//     price:5000,
//     id:1
//   },
//   {
//     name:"iphone6",
//     price:6000,
//     id:2
//   },
//   {
//     name:"iphone7",
//     price:7000,
//     id:3
//   }
// ]
//   return (
//     <>
//     <p>Hiển thị fullName: {fullName} </p>
//     <p>{fullName} năm nay {age}</p>
//     <p>Tên {allStd.name}</p>
//     <p>Tuổi{allStd.age}</p>
//     <p>Chuyển sang dạng JSON để hiển thị </p>
//     <p>{JSON.stringify(allStd)}</p>
//     <p>Hiển thị mảng (array)</p>
//     <ul>
//     {number.map((item, index,arr)=>{
//      return <li key={index}>{item}</li>
//     })}
//     </ul>
//     <h3>Hiển thị tên</h3>
//       {student.map((item,index,arr)=>{
//         return <ol key={index}>{item}</ol>
//       })}
//       <h2>Hiển thị iphone</h2>
//       <table border={1}>
//       <thead>
//         <tr>
//           <th>STT</th>
//           <th>Name</th>
//           <th>Price</th>
//           <th>ID</th>
//         </tr>
//       </thead>
//       <tbody>
//        {product.map((item,index)=>{
//         return <tr key={item.id}>
//           <td>{index+1}</td>
//           <td>{item.name}</td>
//           <td>{item.price}</td>
//           <td>{item.id}</td>
//         </tr>
//        })}
//       </tbody>

//       </table>
//     </>
//     // khi return các element thì phải có thẻ fragment bọc bên ngoài
//   )
// }

