import React, { Component } from 'react'
interface Props{

}
interface State{
    name: string;
    age:number;
    address: string;
}
export default class Class extends Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state = {
            name: 'Minh Thu',
            age: 20,
            address: 'Hà Nội'
        }
    }
    //Khai báo hàm trên render() ko cần let const var
    handleClick=()=>{
        // khi muốn cập nhật
        this.setState({
            age:26,
            name:"Lan"
        })
    }
  render() {
    return (
      <div>
        {this.state.name} năm nay {this.state.age} tuổi
        {/* cập nhật state đối với Class */}
        <br /><br />
        <button onClick={this.handleClick}>Change</button>


      </div>
    )
  }
}
