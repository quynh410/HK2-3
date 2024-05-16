import React, { Component } from 'react'
interface Props{

}
interface State {
    value: string;
}
export default class Bai3 extends Component<Props, State> {
    constructor(props:Props) {
        super(props)
        this.state={
            value: 'Rikkei Academy'
        }
    }
    handleChangeValue = () => {
        this.setState({
          value: 'Rikkei Soft'
        });
      }
  render() {
    return (
        <div>
            <h1>Bài 3</h1>
        <p>Company: <span>{this.state.value}</span></p>
        <button onClick={this.handleChangeValue}>Change state</button>
      </div>
    )
  }
}
