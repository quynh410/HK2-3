import React, { useEffect } from 'react'
import { addUser, deleteUsers, getAllUser, updateUser } from '../../store/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function User() {
  // lấy data về bằng useSelector
  const data:any = useSelector(state=> state)
  console.log(data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllUser());
  },[])
  const handleDeleterUser = (id:number)=>{
    console.log("Giá trị id của user",id);
    let comfirmDelete = window.confirm('Bạn có muốn xóa hay không?')
    if(comfirmDelete){
      dispatch(deleteUsers(id));
    }
  }
  const addNewUser = ()=>{
    let newUser ={
      name: 'Chi',
      age: 24
    }
    dispatch(addUser(newUser));
  }
  const handleUpdateUser = (user:any)=>{
    let upUser= {...user, name:"Hang", age:17}
    dispatch(updateUser(upUser));
  }
  return (
    <>
    <button onClick={(addNewUser)}>Thêm</button>
      <ol>
        {
          data.userReducer.users.map((user:any)=>{
            return <li key={user.id}>{user.name}, tuổi: {user.age} <br />
                        <button onClick={()=>handleDeleterUser(user.id)}>Xóa</button>
                        <button onClick={()=>handleUpdateUser( user)}>Sửa</button>
                  </li>
          })
        }
      </ol>
    </>
  )
}
