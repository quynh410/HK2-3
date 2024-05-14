import React from 'react'
interface Props{
    product:Product;

}
interface Product{
    id:number;
    title:string;
    content:string;
    author:string;
}
export default function Bai7Con({product}: Props) {
  return (
    <div>
    <h4>ID: {product.id}</h4>
    <p>Title: {product.title}</p>
    <p>Content: {product.content}</p>
    <p>Author: {product.author}</p>
  </div>
  )
}
