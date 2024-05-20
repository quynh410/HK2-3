import React, { useState } from 'react'
interface Product {
    productCode: string;
    productName: string;
    price: number;
    quantity: number;
  }

export default function Bai5() {
    const [productCode, setProductCode] = useState<string>('');
    const [productName, setProductName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(10);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const product: Product = {
        productCode,
        productName,
        price,
        quantity,
      };
      console.log(product);
    };
  
    return (
        
      <form onSubmit={handleSubmit}>
        <h1>Bài 5 </h1>
        <div className='all'>
        <div > <br />
          <label>Mã sản phẩm:</label>
          <input
            type="text"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Tên sản phẩm:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Giá:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <br />
        <div>
          <label>Số lượng:</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <br />
        <button type="submit">Đăng ký</button>

        </div>
      </form>
    );
}
