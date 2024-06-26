import React from 'react'
import Count from './components/Count'
import TodoList from './components/TodoList'
import ListNumber from './components/ListNumber'
import Theme from './components/Theme'
import ViewMod from './components/ViewMod'

export default function App() {
    {/* 
        tại sao lại dùng redux-toolkit thay thay thì dùng redux
        1. đối redux khi khởi tạo store thì trong cac hàm reduccer
        thường tách ra các action, các hàm reducer sẽ tính toán trả về 
        state mới dựa vào action truyền lên
        2.còn đối với redux-toolkit viết code sẽ gọn hơn tại vì những action,
        reducer sẽ được viết gộp lại
        3.khi dùng redux thường thì muốn xử lí các tcs vụ bất đồng bộ (call API, gọi tới server (db.json))
        sẽ cài thêm thư viện redux- 
        4. Khi dùng redux toolkit nó sẽ giúp sẽ xử lí đc các tác vụ bất đồng bộ bằng cahs dùng createAsync Thunk 

        *****************************************************
        1. Cấu hình setup với redux-toolkit
        2. Tương tác xử lí bất động bộ.
      */}
  return (
    <>
      <Count></Count>
      <TodoList></TodoList>
      <ListNumber></ListNumber>
      <Theme></Theme>
      <ViewMod></ViewMod>
    </>
  )
}
