import React, { useState } from 'react'

export default function Bai7() {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [displayNumbers, setDisplayNumbers] = useState<string>('');
  
    const addNumber = () => {
      const newNumber = Math.floor(Math.random() * 10) + 1;
      const updatedNumbers = [...numbers, newNumber];
      setNumbers(updatedNumbers);
      setDisplayNumbers(updatedNumbers.join(', '));
      // khi muốn load lại components  thì đi xét state lại cho nó 
       // bắt buộc cái state phải khác state ban dầu
    };

    return (
      <div>
        <h1>Bài 7</h1>
        <h3>Mảng số[<span>{displayNumbers}</span> ]</h3>
        <button onClick={addNumber}>Add Element</button>
        {/* <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul> */}
      </div>
    );
  }
