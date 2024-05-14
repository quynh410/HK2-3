import React from 'react'
import Product from './Product'
interface Props {
    products:Product[];
}
interface Product {
    name:string;
    id:number;
    price:number
}
const obj= {
    name:"hoa",
    age:18,
    address:"hà nội"
}
//destuctoring

// const props={
//     products:[],
//     a:5,
// } 
// const{name,age,address}=obj
// console.log(name);
// console.log(age);
// console.log(address);

export default function Products(props:Props) {
    
    
    // dùng destructoring
    const{products}=props;
    console.log(111,products);
    
  return (
    <div>
        {products.map((item,index)=>{
            return <Product key={index} product={item}></Product>
        })}
    </div>
  )
}
