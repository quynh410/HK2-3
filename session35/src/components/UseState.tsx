import {useState} from 'react'
export default function UseState() {
    // const result = useState(0);
    // const [c,d] = useState(0);
    // console.log(result);
    // let arr = [5,6];
    // let [a,b]= arr
    const [count, setCount] = useState<number>(0);
    const increase = () => {
        setCount (pre => pre + 1 );
        setCount (5);
        setCount (b => b + 3);
    }

  return (
    <div>
        <p>Giá trị biến cao : {count}</p>
        <button onClick={increase}>Tăng </button>
        <button onClick={()=> setCount (count -1)}>Giảm </button>
    </div>
  )
}
