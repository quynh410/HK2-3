import React, { useState } from 'react'
import { storage } from '../config/config'
import {ref,uploadBytes, getDownloadURL} from "firebase/storage"
import axios from 'axios'
export default function Product() {
    const [product,setProduct]= useState<any>()
    const [file,setFile]= useState<any>('');
    const handleAdd = ()=>{
        const storageRef = ref(storage, `products/${file.name}`);
    
        uploadBytes(storageRef, file)
          .then(() => getDownloadURL(storageRef))
          .then((snapShot) => {
            const newProduct = {
              name: product,
              imageUrl: snapShot,
            };
            return axios.post('   http://localhost:8080/products', newProduct);
          })
          .then(() => {
            setProduct('');
            setFile(null);
          })
      };
    

  return (
    <>
    <br /><br /> <br /><br />
      <div>
        <input type="text" placeholder='Nhập Tên sản phẩm' 
         value={product}
        onChange={(e)=>setProduct (e.target.value)}/>
        <input type="file"  onChange={(e)=>setFile (e.target.files?.[0])}/>
        <hr />
        <button onClick={handleAdd}>Thêm</button>
      </div>
    </>
  )
}
/*
    taoj components product
        + ô input nhập tên sản phẩm
        + ô input để chọn ảnh
        + button nhấn thêm sản phẩm
        + sau khi thêm sản phẩm thì sản phẩm vào db.json
    tạo file db.json
        + 1 bằng : product

*/ 