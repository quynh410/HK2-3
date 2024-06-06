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
function Bai8() {
    const [season, setSeason] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        const month = new Date().getMonth() + 1;
        let currentSeason = '';
        if (month >= 1 && month <= 3) {
            currentSeason = 'Xuân';
        }
        else if (month >= 4 && month <= 6) {
            currentSeason = 'Hạ';
        }
        else if (month >= 7 && month <= 9) {
            currentSeason = 'Thu';
        }
        else if (month >= 10 && month <= 12) {
            currentSeason = 'Đông';
        }
        setSeason(currentSeason);
    }, []);
    const month = new Date().getMonth() + 1;
    return (<div>
      <h1>Bài 8</h1>
      <b>Bây giờ là tháng: {month}</b> <br />
      <b>Mùa hiện tại là: {season}</b>
    </div>);
}
exports.default = Bai8;
