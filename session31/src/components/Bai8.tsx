import React, { Component } from 'react'
interface Props{

}
interface State{
    inputValue: string;
}
export default class Bai8 extends Component<Props, State> {
    constructor(props:Props) {
        super(props)
        this.state = {
          inputValue: ''
        };
      }
      handleInputChange = (event:any) => {
        this.setState({ inputValue: event.target.value });
      }
    
      componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
         if (prevState.inputValue !== this.state.inputValue) {
           document.title = this.state.inputValue;
         }
      }

    
      render() {
        return (
          <div>
            <h1>Bài 8</h1>
            <h3>Nhập để thay đổi tiêu đề</h3>
            <input 
              type="text" 
              value={this.state.inputValue} 
              onChange={this.handleInputChange} 
              placeholder="Thay đổi tiêu đề"
            />
          </div>
        );
      }
}
