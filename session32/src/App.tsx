import ClassComponents from "./components/ClassComponents";

import Form from "./components/Form";
import FormAdvanced from "./components/FormAdvanced";
import SelectOption from "./components/SelectOption";
import TextArea from "./components/TextArea";

export default function App() {
  // setTimeout(()=>{
  //   console.log("Hàm setTimeout đã được gọi")
  // },5000)
  // let interval = setInterval(()=>{
  //   console.log("Hàm setInteval đã được gọi");
    
  // },1000)
  // const handleClick =()=>{
  //   clearInterval (interval)
  // }
  return (
    <div>
      {/* <button onClick={handleClick}>Dừng Interval</button> */}
      {/* <ClassComponents></ClassComponents> */}
      <Form></Form>
      <FormAdvanced/>
      <TextArea></TextArea>
      <SelectOption></SelectOption>
    </div>
  )
}




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
