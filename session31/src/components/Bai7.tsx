import React, { Component } from 'react'

export default class Bai7 extends Component {
      componentDidMount() {
        document.title = 'Vite + React + TS';
  }
  render() {
    return (
      <div>
        <h1>Bài 7</h1>
        {/*
        Để thay đổi tiêu đề của tab trình duyệt mỗi khi một component được mount vào DOM, bạn nên sử dụng phương thức vòng đời "componentDidMount()" 
         */}
        <p>thay đổi tiêu đề trong code </p>
      </div>
    )
  }
}


