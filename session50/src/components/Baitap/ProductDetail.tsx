import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const {id} = useParams();
  return (
    <div>
      <h2>Bài 1</h2>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}