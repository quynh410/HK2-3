import React from 'react'
import Bai7Con from './Bai7Con';
interface Props{
    posts:Post[];
}
interface Post {
    id:number;
    title:string;
    content:string;
    author:string;
}
export default function Bai7Cha({posts}:Props) {
    console.log(posts);
    
  return (
    <div>
      <h1>Bài 7</h1>
      <h2>Danh sách Post</h2>
    {posts.map((item:Post,index) =>{
        return <Bai7Con key={index} product={item}/>
    })}
    </div>
  )
}


