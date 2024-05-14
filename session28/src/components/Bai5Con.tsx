import React from 'react'
interface Props{
    product:Product;
}
interface Product {
    id:number
    name: string,
    price: number,
    quantity:number;
}
export default function Bai5Con(props:Props) {
console.log(111,props);
    const {product} = props;
  return (
    <div>
        <h3>Thông tin sản phẩm:</h3>
        <p>ID: {product.id}</p>
        <p>Tên: {product.name}</p>
        <p>Giá: {product.price}</p>
        <p>Số lượng: {product.quantity}</p>
      </div>
  )
}
