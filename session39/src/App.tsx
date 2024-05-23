import { useCallback, useState } from 'react'
import UseRef from './components/UseRef'
import UseMemo from './components/UseMemo'
import UseReducer from './components/UseReducer'
import UseContext from './components/UseContext'
import Header from './components/Header'
import Main from './components/Main'
import UseCallBack from './components/UseCallBack'

export default function App() {
  const [active, setActive] = useState<boolean>(false)
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1)
    setActive(!active)
  }
  console.log('components app khi click ',);
  //Khi component App được re-render thì các component con cũng re-render theo.
  /*
  nếu active là true thì hiển thị thẻ  p với nội dung là xin chào
  nếu active là false thì ko hiển thị gì cả 

  */
  const getIdproduct = ()=>{

  }
  let result = useCallback (()=>{
    const getIdProduct = ()=>{
    }
    return getIdProduct;
  },[])
  
  return (
    <div>
      <UseRef></UseRef>
      <UseMemo></UseMemo>
      <UseReducer></UseReducer>
      <UseCallBack></UseCallBack>
      <UseContext></UseContext>
      <Header counts = {active}></Header>
      <Main getIdproduct={result}></Main>
      {active ? <p>Xin chào</p> : "" }
      <button onClick={handleClick}>click active</button>
    </div>
  )
}
