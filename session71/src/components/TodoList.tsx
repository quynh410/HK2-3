import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add,deleteJob, update } from "../store/reducer/todoListReducer";
export default function TodoList() {
  const data: any = useSelector((state) => state);
  console.log(22222, data);
  const dispatch = useDispatch();
  const addTodo = ()=>{
    let newTodo:any = {
      id:Math.floor(Math.random()*9999999999),
      name:"code redux-toolkit"
    }
    dispatch(add(newTodo));
  }
  const handleDelete = (id:number)=>{
    dispatch(deleteJob(id));
    }
    const handleUpdate = ()=>{
      let newJob= [...jobs.name:"Học lập trình với redux-toolkit"]
      dispatch(update(newJob));
    }

  return (
    <div>
      <br /><br />
      <button onClick={addTodo}>Thêm</button>
      <ul>
        {data.todoListReducer.jobs.map((item: any) => {
          return (
            <>
              <li key={item.id}>{item.name}</li>
              <button onClick={()=> handleDelete(jobs.id)}>Xóa</button>
              <button onClick={()=> handleUpdate(jobs)}>Cập nhật</button>
            </>
          )
        })}
      </ul>
    </div>
  );
}
