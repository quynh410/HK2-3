
import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import Bai4Cha from './components/Bai4Cha';
import Bai5Cha from './components/Bai5Cha';
import Bai6Cha from './components/Bai6Cha';
import Bai7Cha from './components/Bai7Cha';
import Bai8Cha from './components/Bai8Cha';
import Bai9 from './components/Bai9';
// import Parent from './components/Parent'
// import Products from './components/Products';

export default function App() {
  // let fullName:string= "Hoa"
  // let age:number = 20;
  // let products =[
  // {
  //   name : "iphone 4",
  //   id: 1,
  //   price: 50000,
  // },
  // {
  //   name : "iphone 5",
  //   id: 2,
  //   price: 60000,
  // },
  // {
  //   name : "iphone 6",
  //   id: 3,
  //   price: 70000,
  // }
  // ];

  let name:string= " Nguyễn Văn Nam"
  const product = [
    {
     id: 1,
     name: 'Nguyễn Văn Nam',
     price: 1000,
     quantity: 5
   },
   {
       id: 2,
       name: 'Nguyễn Văn Nam',
       price: 2000,
       quantity: 10
   },
   {
       id: 3,
       name: 'Nguyễn Minh Sơn',
       price: 3000,
       quantity: 15
   }
   ];


   const products1 = [
    {
     id: 1,
     name: 'Nguyễn Văn Nam',
     address:"Thanh Xuân",
     email: "vannam@gmail.com"
   },
   {
     id: 2,
     name: 'Nguyễn Hương',
     address:"Cầu Giấy",
     email: "huong@gmail.com"
   }
   ];

  const posts =[
    {id:1, title:"1", content:"post 1", author:"author 1"},
    {id:2, title:"2", content:"post 2", author:"author 2"},
    {id:3, title:"3", content:"post 3", author:"author 3"},
  ];
  return (
    <div>
      <p>props : properties
        - Dùng để truyền , gửi dữ liệu từ coponent cha xuống components con 
        - thế nào là component cha ? : component cha chưa chứa component con 
        - thế nào là component con ?
      </p>
      <p>state
        -
      </p>
      {/* <Parent a={fullName} b={age}></Parent>
      <Products products={products}></Products> */}
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4Cha name={name}></Bai4Cha>
      <Bai5Cha product={product}></Bai5Cha>
      <Bai6Cha products3={products1}/>
      <Bai7Cha posts={posts}/>
      <Bai8Cha  product={product}/>
      <Bai9/>
    </div>
  )
}
