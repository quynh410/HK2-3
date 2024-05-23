import React, { memo, useCallback, useMemo, useState } from 'react'

function B4() {
    const [generate, setGenerate] = useState(false);
    const randomNumber = useMemo(() => {
      return Math.floor(Math.random() * 100) + 1;
    }, [generate]);
      const handleGenerate = useCallback(() => {
      setGenerate(prev => !prev);
    }, []);
  
    return (
      <div>
        <h1>Bài 4/ 38</h1>
        <p>Number random: {randomNumber}</p>
        <button onClick={handleGenerate}>Generate</button>
      </div>
    );
}
export default memo(B4);