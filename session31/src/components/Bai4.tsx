import React, { Component } from 'react'
interface Props{
}
interface State{
    value: string;
}
export default class Bai4 extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            value: 'Học code để đi làm'
        }
        
        
    }
    handleChangeValue = () => {
        this.setState({
            value: 'Học code sẽ thành công. Cố lên!!!'
        });
      }  
      
      
      shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>):boolean {
        return false;
      }
  render() {
    return (
        <div>
            <h1>Bài 4</h1>
            <p>Slogan: {this.state.value}</p>
            <button onClick={this.handleChangeValue}>Change state</button>
      </div>
    )
  }
}



