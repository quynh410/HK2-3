import React, { Component } from 'react'

interface State{
    value:string;
}
export default class Bai5 extends Component<State> {
  render() {    
    return (
      <div>
        <h1>Bài 5</h1>
        <p>Status: {this.props.value}</p>
      </div>
    )
  }
}
