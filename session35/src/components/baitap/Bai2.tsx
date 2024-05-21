import React, { useState } from 'react'
interface Products{
    id:number;
    name:string;
    price:string;
    quantity:number;
}
export default function Bai2() {
    const [product,SetProduct]= useState<Products>({
        id:1,
        name:'Cocca Cola',
        price:"1000 $",
        quantity:10,
    })
  return (
    <>
      <div className='all'>
      <h1>Bài 2</h1>
      <h3>Thông tin sản phẩm</h3>
      <b>ID : {product.id}</b> <br />
      <b>Tên : {product.name}</b> <br />
      <b>Giá : {product.price}</b> <br />
      <b>Số lượng : {product.quantity}</b> <br />
    </div>
    </>
      
  )
}




