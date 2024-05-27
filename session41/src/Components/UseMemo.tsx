import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count,setCount]= useState<number>(0)
    const [cart,setCart]= useState([
            {
                product: "iphone 5",
                price: 1000,
                quantity: 2
            },
            {
                product: "iphone 6",
                price: 2000,
                quantity: 6
            },
            {
                product: "iphone 7",
                price: 3000,
                quantity: 8
            }
        
    ])

    let memo = useMemo(()=>{
        let payMent = cart.reduce((acc, item) =>{
        return acc + item.price * item.quantity;
    },0)
        return payMent;
    },[cart])
    const addToCart = () =>{
        let newProduct = {
            product: "iphone 8",
            price: 8000,
            quantity: 2
        }
        cart.push(newProduct);
        setCart([...cart]);
    }
    
  return (
    <div>
        <p>Giá tiền : {memo}</p>
      {/* 
      Đây là 1 hook giúp ghi 
     */}
     <button onClick={()=> setCount(count + 1)}>Click</button>
     <button onClick={addToCart}>Mua</button>
    </div>
  )
}
