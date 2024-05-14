import React, { Component } from 'react'
interface Props {
    
}
interface State {
    name: string;
}
export default class Bai1 extends Component<Props,State> {
    constructor(props:any){
        super(props);
        this.state = {
            name: 'Nguyễn Thị Thu Quỳnh',
        }
    }
    render() {
        return (
          <div>
            <h1>Bài 1</h1>
            <p>Họ và tên: {this.state.name}</p>
          </div>
        );
      }
    }



