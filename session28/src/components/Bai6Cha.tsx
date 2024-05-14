import Bai6Con from './Bai6Con'
interface Props {
    products3:Product[];
}
interface Product {
    id:number;
    name:string;
    address:string;
    email:string;
}
export default function Bai6Cha(props:Props) {
const {products3}=props;
    console.log("111111",props)
    

  return (
    <div> 
        <h1>Bài 6</h1>
    {products3.map((item:Product)=>{
        return <Bai6Con products={item}></Bai6Con>
    })}
</div>
  )
}
