import React from 'react'
interface Props{
    products:Product;
}
interface Product {
    id:number;
    name:string;
    address:string;
    email:string;
}
export default function Bai6Con({products}:Props) {

  return (
    <div>
        <h3>Thông tin sản phẩm:</h3>
        <p>ID: {products.id}</p>
        <p>Tên: {products.name}</p>
        <p>Giá: {products.address}</p>
        <p>Số lượng: {products.email}</p>
      </div>
  )
}
