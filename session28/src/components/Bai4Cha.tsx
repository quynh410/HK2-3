import Bai4Con from './Bai4Con';
interface Props{
    name:string;
}
export default function Bai4Cha(name:Props) {
  return (
    <div>
      <h1>Bài4</h1>
      <Bai4Con></Bai4Con>
      <p> Họ và tên components cha: {name.name}</p>
      <p> Họ và tên components con: {name.name}</p>
    </div>
  )
}


