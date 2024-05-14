import React, { Component } from 'react'
interface Props {
    
}
interface State {
    id:number;
    name: string;
    date:string;
    address:string;
}
export default class Bai2 extends Component<Props,State> {
    constructor(props:any){
        super(props);
        this.state = {
            id:1,
            name: 'Nguyễn Thị Thu Quỳnh',
            date:'04/01/2005',
            address:'Thanh Xuân, Hà Nội'
        }
    }
    render() {
        return (
          <div>
            <h1>Bài 2</h1>
            <h2>Thông tin cá nhân</h2>
            <p>id: {this.state.id}</p>
            <p>Họ và tên: {this.state.name}</p>
            <p>Ngày sinh: {this.state.date}</p>
            <p>Đỉa chỉ: {this.state.address}</p>
          </div>
        );
      }
    }
