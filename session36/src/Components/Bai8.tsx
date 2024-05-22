import React, { useState, useEffect } from 'react';

export default function Bai8() {
  const [season, setSeason] = useState<string>('');

  useEffect(() => {
    const month = new Date().getMonth() + 1;
    let currentSeason = '';

    if (month >= 1 && month <= 3) {
      currentSeason = 'Xuân';
    } else if (month >= 4 && month <= 6) {
      currentSeason = 'Hạ';
    } else if (month >= 7 && month <= 9) {
      currentSeason = 'Thu';
    } else if (month >= 10 && month <= 12) {
      currentSeason = 'Đông';
    }

    setSeason(currentSeason);
  }, []);

  const month = new Date().getMonth() + 1;

  return (
    <div>
      <h1>Bài 8</h1>
      <b>Bây giờ là tháng: {month}</b> <br />
      <b>Mùa hiện tại là: {season}</b>
    </div>
  );
}
