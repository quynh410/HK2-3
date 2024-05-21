import React, { Component } from 'react'
interface Props{
}
interface State{
    count:number;
}
let interval:any;
export default class ClassComponents extends Component<Props, State> {
    constructor(props:Props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(): void {
        interval =setInterval(()=>{
            console.log("hàm setInterval đã đươc gọi");
            
        },1000)
    }
    handleClick=()=>{
        clearInterval(interval)
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Dừng Interval</button>
      </div>
    )
  }
}
