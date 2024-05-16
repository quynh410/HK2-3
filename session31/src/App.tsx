import React, { Component } from 'react'
// import ClassComponent from './components/ClassComponent'
// import A from './components/A'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'
import Bai7 from './components/Bai7'
import Bai8 from './components/Bai8'
import Bai9 from './components/Bai9'
import Bai10 from './components/Bai10'

interface Props{

}
interface State{
  value:string;
  message:string;
}
export default class App extends Component<Props, State> {
  // const[active, setActive]= useState<boolean>(true)
  // const removedComponent = () => {
  //   setActive(!active)
  // }
  constructor(props:Props){
    super(props)
    this.state={
      value:'Open the from',
      message:'Interface rendering'
  }
}
  updateValue= ()=>{
    this.setState({
      value:'Close the form',
    });
  }
  updateMessage=()=>{
    this.setState({
      message:'Class rendering'
    });
  }
  render() {
    return (
      <div>
        {/* <ClassComponent></ClassComponent>
        <A></A>  
          {active ? <A></A>:""}    */}
        {/* <button onClick={removedComponent}>Tháo gỡ component A</button> */}
        <Bai1></Bai1>
        <Bai2></Bai2>
        <Bai3></Bai3>
        <Bai4></Bai4>
        <div>
          <Bai5 value={this.state.value} />
          <button onClick={this.updateValue}>Change props</button>
        </div>
        <div>
          <Bai6 message={this.state.message} />
          <button onClick={this.updateMessage}>Change props</button>
        </div>
        <Bai7></Bai7>
        <Bai8></Bai8>
        <Bai9></Bai9>
        <Bai10></Bai10>
      </div>
    )
  }
}





