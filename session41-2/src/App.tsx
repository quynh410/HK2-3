import React from "react";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import Bai4 from "./components/Bai4";
import Bai5 from "./components/Bai5";
import Bai6 from "./components/Bai6";
import Bai7 from "./components/Bai7";
import Bai8 from "./components/Bai8";
import Bai9 from "./components/Bai9";

export default function App() {
  return (
    <div>
      <h3 className="text-blue-600  font-semibold h-8">Rikkei Academy</h3>
      {/* 
        màu: text-
        font: font- 
        chiều cao: h-
        chiều dài: w-
        padding 4 góc: p
        padding trái-phải: px
        padding trên-dưới: py
        padding trên: pt
        padding dưới: pb
        padding trái: pl
        padding phải: pr
      */}
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
      <Bai8></Bai8>
      <Bai9></Bai9>
    </div>
  );
}
