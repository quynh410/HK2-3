import React, { Component } from "react";
interface Props {}
interface State {
  currentTime: string;
  timerId: number;
}
export default class Bai9 extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      timerId: 0,
    };
  }

  componentDidMount(): void {
    const intervalId = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString(),
      });
    }, 1000);

    this.setState({ timerId: intervalId });
  }

  componentWillUnmount(): void {
    clearInterval(this.state.timerId);
  }

  render() {
    return (
      <div>
        <h1>Bài 9</h1>
        <h3>Thời gian hiện tại: {this.state.currentTime}</h3>
      </div>
    );
  }
}
