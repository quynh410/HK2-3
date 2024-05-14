import React from 'react'
interface Props{
    product:Product;
}
interface Product {
    name: string,
    price: number,
    id:number
}
export default function Product(props:Props) {
console.log(111,props);
    const {product} = props;
  return (
    <div>
        tên sản phẩm {product.name}
        giá sản phẩm {product.price}
    </div>
  )
}
