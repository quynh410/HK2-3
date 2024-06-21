import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Count() {
  const countState: any = useSelector((state) => {
    return state;
  });
  // console.log(countState);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: "INCREASE",
    });
  };
  const decrease = () => {
    dispatch({
      type: "DECREASE",
    });
  };
  return (
    <>
      <p>Giá trị biến count: {countState.countReducer}</p>
      <div>
        <button onClick={increase}>+</button>_____
        <button onClick={decrease}>--</button>
      </div>
    </>
  );
}
