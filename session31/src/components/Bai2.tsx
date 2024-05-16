import React, { Component } from 'react'

export default class Bai2 extends Component {
    componentDidMount():void{
        console.log('Component đã được mount!');

    }
  render() {
    return (
      <div>
        <h1>Bài 2</h1>
        <p>Kiểm tra console log</p>
      </div>
    );
  }
}
