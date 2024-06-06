"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Bai4() {
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
    const [selectedCity, setSelectedCity] = (0, react_1.useState)('');
    const handleSelectChange = (event) => {
        setSelectedCity(event.target.value);
        console.log(event.target.value);
    };
    return (<div>
            <h1>Bài 4</h1>
            <div>
                {selectedCity && <h3>Tỉnh/thành phố: {selectedCity}</h3>}
            </div>
          <select value={selectedCity} onChange={handleSelectChange}>
            <option value="">Chọn tỉnh/thành phố</option>
            {city.map((city, index) => (<option key={index} value={city}>
                {city}
              </option>))}
          </select>
        </div>);
}
exports.default = Bai4;
;
