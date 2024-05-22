import React, { useEffect, useState } from 'react'

export default function Bai5() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const tick = () => {
        setTime(new Date());
      };
      const timerID = setInterval(tick, 1000);
      return () => clearInterval(timerID);
    }, []);
  
    return (
      <div>
        <h1>Bài 5</h1>
        <h3>Thời gian hiện tại: {time.toLocaleTimeString()}</h3>
      </div>
    );
}
