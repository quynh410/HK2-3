"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __importDefault(require("./components/Form"));
const FormAdvanced_1 = __importDefault(require("./components/FormAdvanced"));
const SelectOption_1 = __importDefault(require("./components/SelectOption"));
const TextArea_1 = __importDefault(require("./components/TextArea"));
function App() {
    // setTimeout(()=>{
    //   console.log("Hàm setTimeout đã được gọi")
    // },5000)
    // let interval = setInterval(()=>{
    //   console.log("Hàm setInteval đã được gọi");
    // },1000)
    // const handleClick =()=>{
    //   clearInterval (interval)
    // }
    return (<div>
      {/* <button onClick={handleClick}>Dừng Interval</button> */}
      {/* <ClassComponents></ClassComponents> */}
      <Form_1.default></Form_1.default>
      <FormAdvanced_1.default />
      <TextArea_1.default></TextArea_1.default>
      <SelectOption_1.default></SelectOption_1.default>
    </div>);
}
exports.default = App;
// import Bai1 from './components/baitap/Bai1'
// import Bai2 from './components/baitap/Bai2'
// import Bai3 from './components/baitap/Bai3'
// import Bai4 from './components/baitap/Bai4'
// import Bai5 from './components/baitap/Bai5'
// import Bai6 from './components/baitap/Bai6'
// import './App.css'
// export default function App() {
//   return (
//     <div>
//       <Bai1></Bai1>
//       <Bai2></Bai2>
//       <Bai3></Bai3>
//       <Bai4></Bai4>
//       <Bai5></Bai5>
//       <Bai6></Bai6>
//     </div>
//   )
// }
