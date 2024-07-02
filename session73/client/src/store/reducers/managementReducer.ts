import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// lay thong tin tu server
export const getAllManagement:any = createAsyncThunk("management/getAllManagement",
    async () => {
        let response = await axios.get("http://localhost:8080/articles");
        return response.data;
    }
)

export const putManagement: any = createAsyncThunk("management/putManagement",
    async (data: any) => {
        const {id, ...info} = data;
        await axios.put(`http://localhost:8080/articles/${id}`, info);  
        let response = await axios.get("http://localhost:8080/articles");
        return response.data;
    }
)
export const AddManagement: any = createAsyncThunk("management/updateManagement",
    async (update: any) => {
       let response = await axios.post(`http://localhost:8080/articles`,update );
       return response.data;
        
    }
)
const managementReducer = createSlice({
    name: "management",
    initialState: {
        management:[

        ],
    },
    reducers: {

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllManagement.fulfilled,(state,action)=>{
            state.management = action.payload;
        })
        .addCase(putManagement.fulfilled,(state,action)=>{
            state.management = action.payload;
        })
        .addCase(AddManagement.fulfilled,(state:any,action:any) => {
            state.management.push(action.payload)
        })
        
    }
})
export default managementReducer.reducer;