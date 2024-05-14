import React from 'react'
interface Props{
    post:ListPost;

}
interface ListPost{
    id:number
    name: string,
    price: number,
    quantity:number;
}
export default function Bai8Con({post}: Props) {
  return (
    <div>
    <h4>ID: {post.id}</h4>
    <p>name: {post.name}</p>
    <p>price: {post.price}</p>
    <p>quantity: {post.quantity}</p>
  </div>
  )
}
