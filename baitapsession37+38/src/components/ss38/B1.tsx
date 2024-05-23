import React, { useCallback, useState } from 'react'

export default function B1() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Bài 1 / 38</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>increase</button>
    </div>
  );
}
