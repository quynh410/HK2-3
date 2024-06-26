import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomNumbers } from '../store/reducer/listNumberReducer';

export default function ListNumber() {
    const numbers:any = useSelector((state:any) => state.numbers.numbers);
    const dispatch = useDispatch();

  const handleGenerateNumbers = () => {
    dispatch(generateRandomNumbers(10));
  };

  return (
    <div>
      <ul>
        {numbers.generateRandomNumbers.map((number:number, index:any) => (
            <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={handleGenerateNumbers}>Random Numbers</button>
    </div>
  );
}


