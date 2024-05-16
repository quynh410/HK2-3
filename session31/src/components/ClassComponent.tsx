import React, { Component } from 'react'
interface Props{

}
interface State{
    name: string;
    age:number;
    count: number;
}
export default class ClassComponent extends Component<Props, State> {
    constructor(props:Props){
        super(props)    
        this.state = {
            name: 'Minh Thu',
            age: 20,
            count: 2   
        }
    }
    componentDidMount(): void {
        // trong Xmind
    }
    // dùng các phương thức mặc định react cung cấp
    componentWillmount(): void {
        console.log('chạy sau khi component khởi tạo xog giá trị state');
        // trong Xmind 
    }
    handleClick= ()=>{
        // khi muốn cập nhật state 
        this.setState({
            count: this.state.count+1,
        })
    }
    // các phương thức cung cấp trong giai đoạn updating 
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
        // bắt buộc phải return về true hoặc flase
        // nếu không gọi phương thức ra thì mặc định phương thức trả về true
        return true
    }
    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        console.log('component wil update được gọi');
        
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log("componentDidUpdate được gọi");
        
    }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>Thay đổi state</button>
        <p>giá trị count: {this.state.count}</p>
      </div>
    )
  }
}

