import React, { Component } from 'react'
interface Props{

}
interface State{
  count:number;
  interval:number;
}
export default class Bai10 extends Component<Props, State> {  
  constructor(props:Props) {
  super(props);
  this.state = {
    count: 0,
    interval: 0
  };
}

componentDidMount() {
  const interval = setInterval(this.incrementCount, 1000);
  this.setState({ interval });
}

componentWillUnmount() {
  clearInterval(this.state.interval);
}

componentDidUpdate( prevState: Readonly<State>): void {
  if (prevState.count === 10) {
         this.setState({ count: 0 });
       }
}

incrementCount = () => {
  this.setState((prevState) => ({
    count: (prevState.count + 0.5) % 11
  }));
};

render() {
  return (
  <div>
    <h1>Bài 10</h1>
    <p>Count: {this.state.count}</p>
  </div>
)

}
}

