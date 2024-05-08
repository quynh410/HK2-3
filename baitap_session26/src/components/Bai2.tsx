import React from 'react';

class Calculation extends React.Component {
  //  cộng
  addNumbers(a:number, b:number) {
    return a + b;
  }

  // trừ
  subtractNumbers(a:number, b:number) {
    return a - b;
  }
  // nhân
  multiplyNumbers(a:number, b:number) {
    return a * b;
  }
  // chia
  divideNumbers(a:number, b:number) {
    return a / b;
  }

  render() {
    const addResult = this.addNumbers(5, 3);
    const subtracResult = this.subtractNumbers(8, 4);
    const multiplyResult = this.multiplyNumbers(2, 6);
    const divideResult = this.divideNumbers(10, 2);

    return (
      <div>
        <h1>Kết quả các phép tính</h1>
        <p>Cộng: {addResult}</p>
        <p>Trừ: {subtracResult}</p>
        <p>Nhân: {multiplyResult}</p>
        <p>Chia: {divideResult}</p>
      </div>
    );
  }
}

export default Calculation;