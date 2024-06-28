import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



//  lấy thông tin tất cả từ server
export const getAllUser:any = createAsyncThunk("users/getAllUser",
    async ()=>{
    let response = await axios.get("http://localhost:8080/users")
    return response.data
}) 
// ham xoa thong tin tat ca cac user
export const deleteUsers:any = createAsyncThunk("users/deleteUsers",
    async (id:number)=>{
    let response = await axios.delete(`http://localhost:8080/users/${id}`)
    return id;
})
// ham them thong tin user vaof mang
export const addUser:any = createAsyncThunk("users/addUser",
    async (user:any)=>{
    let response = await axios.post("http://localhost:8080/users",user)
    return response.data
})
// hàm cập nhật thông tin user
export const updateUser: any = createAsyncThunk("users/updateUser",
    async (user:any)=>{
    let response = await axios.put(`http://localhost:8080/users/${user.id}`,user)
    return response.data
})
const userReducer = createSlice({
    name: "users",
    initialState: {
        users: [

        ],
    },
    reducers: {
       //bên trong reducer chứa các action
        addUser: (state: any, action: any) => {
            state.users.push(action.payload);
        },
        deleteUser: (state: any, action: any) => {
            state.users = state.users.filter((user: any) => user.id!== action.payload);
        },
        updateUser: (state: any, action: any) => {
            state.users = state.users.map((user: any) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            });
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending,(state,action)=>{
            //trong trạng thái chờ gọi API

        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            // trong trạng thái thành công, lấy dữ liệu thành công
            state.users = action.payload
        })
        .addCase(getAllUser.rejected,(state,action)=>{
            // nếu lấy dữ liệu thất bại 

        })
        .addCase(addUser.fulfilled,(state:any,action:any)=>{
            state.users.push(action.payload)
        })
        .addCase(deleteUsers.fulfilled,(state:any,action:any)=>{
            state.users = state.users.filter((user:any)=>user.id!==action.payload)
        })
        .addCase(updateUser.fulfilled,(state:any,action:any)=>{
            let index = state.users.findIndex((user:any)=>{
                return user.id === action.payload.id
            })
            
            if(index != -1){
                state.users[index]= action.payload
            }
        })
    }
})
export default userReducer.reducer