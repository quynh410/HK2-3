import Bai5Con from './Bai5Con'
interface Props {
    product:Product[];
}
interface Product {
    id:number;
    name:string;
    price:number;
    quantity:number;
}
export default function Bai5Cha(props:Props) {
    const{ product }=props;

  return (
    <div>
        <h1>Bài 5</h1>
    {product.map((item,index)=>{
        return <Bai5Con key={index} product={item}></Bai5Con>
    })}
</div>
  )
}
