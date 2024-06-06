"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function Bai3() {
    const [switchTabs, setSwitchTabs] = (0, react_1.useState)('Trang chủ');
    const handleTabClick = (tab) => {
        setSwitchTabs(tab);
    };
    return (<>
      <h1>Bài 3</h1>
      <div className='tabs'>
        <div className={`tab ${switchTabs === 'Trang chủ' ? 'active' : ''}`} onClick={() => handleTabClick('Trang chủ')}>
          <b>Trang chủ</b>
        </div>
        <div className={`tab ${switchTabs === 'Sản phẩm' ? 'active' : ''}`} onClick={() => handleTabClick('Sản phẩm')}>
          <b>Sản phẩm</b>
        </div>
        <div className={`tab ${switchTabs === 'Giới thiệu' ? 'active' : ''}`} onClick={() => handleTabClick('Giới thiệu')}>
          <b>Giới thiệu</b>
        </div>
        <div className={`tab ${switchTabs === 'Liên hệ' ? 'active' : ''}`} onClick={() => handleTabClick('Liên hệ')}>
          <b>Liên hệ</b>
        </div>
      </div>
    </>);
}
exports.default = Bai3;
