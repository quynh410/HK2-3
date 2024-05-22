import { useState } from 'react';

export default function Bai3() {
  const [switchTabs, setSwitchTabs] = useState('Trang chủ');

  const handleTabClick = (tab:any) => {
    setSwitchTabs(tab);
  };
  return (
    <>
      <h1>Bài 3</h1>
      <div className='tabs'>
        <div
          className={`tab ${switchTabs === 'Trang chủ' ? 'active' : ''}`}
          onClick={() => handleTabClick('Trang chủ')}
        >
          <b>Trang chủ</b>
        </div>
        <div
          className={`tab ${switchTabs === 'Sản phẩm' ? 'active' : ''}`}
          onClick={() => handleTabClick('Sản phẩm')}
        >
          <b>Sản phẩm</b>
        </div>
        <div
          className={`tab ${switchTabs === 'Giới thiệu' ? 'active' : ''}`}
          onClick={() => handleTabClick('Giới thiệu')}
        >
          <b>Giới thiệu</b>
        </div>
        <div
          className={`tab ${switchTabs === 'Liên hệ' ? 'active' : ''}`}
          onClick={() => handleTabClick('Liên hệ')}
        >
          <b>Liên hệ</b>
        </div>
      </div>
    </>
  );
}
