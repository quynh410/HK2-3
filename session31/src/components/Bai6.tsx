import React, { Component } from 'react'
interface State{
    message:string;
}
export default class Bai6 extends Component<State> {
    // ngăn chặn việc render lại
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>): boolean {
        return false;
    }
  render() {
    return (
      <div>
        <h1>Bài 6</h1>

        <p>Message: {this.props.message}</p>

      </div>
    )
  }
}



