import React from 'react'
import Bai8Con from './Bai8Con';
interface Props{
    product:Product[];
}
interface Product {
    id:number
    name: string,
    price: number,
    quantity:number;
}
export default function Bai8Cha({product}:Props) {
    console.log(product);
    
  return (
    <div>
      <h1>Bài 8</h1>
      <h2>Danh sách sản phẩm</h2>
    {product.map((item:Product,index) =>{
        return <Bai8Con key={index} post={item}/>
    })}
    </div>
  )
}


