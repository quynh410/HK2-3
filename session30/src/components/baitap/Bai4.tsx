import React, { useState } from 'react'

export default function Bai4() {
    const city = [
        'Hà Nội',
        'Hồ Chí Minh',
        'Đà Nẵng',
        'Hải Phòng',
        'Cần Thơ',
        'Huế',
        'Nha Trang',
        'Đà Lạt',
        'Vũng Tàu',
        'Quảng Ninh',
      ];
      const [selectedCity, setSelectedCity] = useState('');

      const handleSelectChange = (event:any) => {
        setSelectedCity(event.target.value);
        console.log(event.target.value);
      };
    
      return (
        <div>
            <h1>Bài 4</h1>
            <div>
                {selectedCity && <h3>Tỉnh/thành phố: {selectedCity}</h3>}
            </div>
          <select value={selectedCity} onChange={handleSelectChange}>

            <option value="">Chọn tỉnh/thành phố</option>
            {city.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      );
    };
    

