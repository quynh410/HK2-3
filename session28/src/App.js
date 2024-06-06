"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bai1_1 = __importDefault(require("./components/Bai1"));
const Bai2_1 = __importDefault(require("./components/Bai2"));
const Bai3_1 = __importDefault(require("./components/Bai3"));
const Bai4Cha_1 = __importDefault(require("./components/Bai4Cha"));
const Bai5Cha_1 = __importDefault(require("./components/Bai5Cha"));
const Bai6Cha_1 = __importDefault(require("./components/Bai6Cha"));
const Bai7Cha_1 = __importDefault(require("./components/Bai7Cha"));
const Bai8Cha_1 = __importDefault(require("./components/Bai8Cha"));
const Bai9_1 = __importDefault(require("./components/Bai9"));
// import Parent from './components/Parent'
// import Products from './components/Products';
function App() {
    // let fullName:string= "Hoa"
    // let age:number = 20;
    // let products =[
    // {
    //   name : "iphone 4",
    //   id: 1,
    //   price: 50000,
    // },
    // {
    //   name : "iphone 5",
    //   id: 2,
    //   price: 60000,
    // },
    // {
    //   name : "iphone 6",
    //   id: 3,
    //   price: 70000,
    // }
    // ];
    let name = " Nguyễn Văn Nam";
    const product = [
        {
            id: 1,
            name: 'Nguyễn Văn Nam',
            price: 1000,
            quantity: 5
        },
        {
            id: 2,
            name: 'Nguyễn Văn Nam',
            price: 2000,
            quantity: 10
        },
        {
            id: 3,
            name: 'Nguyễn Minh Sơn',
            price: 3000,
            quantity: 15
        }
    ];
    const products1 = [
        {
            id: 1,
            name: 'Nguyễn Văn Nam',
            address: "Thanh Xuân",
            email: "vannam@gmail.com"
        },
        {
            id: 2,
            name: 'Nguyễn Hương',
            address: "Cầu Giấy",
            email: "huong@gmail.com"
        }
    ];
    const posts = [
        { id: 1, title: "1", content: "post 1", author: "author 1" },
        { id: 2, title: "2", content: "post 2", author: "author 2" },
        { id: 3, title: "3", content: "post 3", author: "author 3" },
    ];
    return (<div>
      <p>props : properties
        - Dùng để truyền , gửi dữ liệu từ coponent cha xuống components con 
        - thế nào là component cha ? : component cha chưa chứa component con 
        - thế nào là component con ?
      </p>
      <p>state
        -
      </p>
      {/* <Parent a={fullName} b={age}></Parent>
        <Products products={products}></Products> */}
      <Bai1_1.default></Bai1_1.default>
      <Bai2_1.default></Bai2_1.default>
      <Bai3_1.default></Bai3_1.default>
      <Bai4Cha_1.default name={name}></Bai4Cha_1.default>
      <Bai5Cha_1.default product={product}></Bai5Cha_1.default>
      <Bai6Cha_1.default products3={products1}/>
      <Bai7Cha_1.default posts={posts}/>
      <Bai8Cha_1.default product={product}/>
      <Bai9_1.default />      

    </div>);
}
exports.default = App;
