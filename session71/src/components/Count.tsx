import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../store/reducer/countReducer';
import { decrease } from '../store/reducer/countReducer';
export default function Count() {
    // thực hienej hành động useDispatch
    const data:any = useSelector(state => state)
    console.log(data);
    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch(increase());
    }
    const handleDecrease = () => {
        dispatch(decrease());
    }
    
  return (
    <div>
      <p>Giá trị biến count : {data.countReducer.count}</p>
      <button onClick={handleIncrease}>+</button>___
      <button onClick={handleDecrease}>-</button>
    </div>
  )
}