import React, { useEffect, useState } from "react";

export default function Bai9() {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  },[]);

  return (
    <div>
      <h1>Bài 9</h1>
      <p>Thời gian đã trôi qua : {time} giây</p>
    </div>
  );
}
