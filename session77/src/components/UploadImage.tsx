import { useState } from "react";
import { storage } from "../config/config";
import {ref,uploadBytes, getDownloadURL} from "firebase/storage"
export default function UploadImage() {
    const [image, setImage]= useState<any>("");
    // khi ng dung chon anh thi dung skn onchange lay gia tri cua ảnh ng dung da chon 
    const changeImage = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const valueImage:any = e.target.files?.[0];
        console.log(valueImage);
        //luu lai gia tri ng dung chon 
        setImage(valueImage);
    }
    // hàm up load ảnh lên firebase
    const uploadImage  =()=>{
        // noi tien hanh xu li uploadImage
        const imageRef = ref(storage, `images/${image.name}`);
        uploadBytes(imageRef, image)
        .then((snapShot)=>{
            getDownloadURL(snapShot.ref)
            .then((url)=>{
                console.log(1111111,url);
                
            })
        });
    }
  return (
    <div>
        <br />
        <input type="file" onChange={changeImage}/>
        <hr />
        <button onClick={uploadImage}>Upload</button>
    </div>
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
