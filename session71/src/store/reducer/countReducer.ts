import { createSlice } from "@reduxjs/toolkit"

const countReducer = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increase:(state:any)=>{
            // state.count = state.count + 1
            state.count+=1;
        },
        decrease:(state:any)=>{
            state.count-=1;
        },
    },
})
// đi xuất ra các acyion bằng cách  dùng destrucoring

export const {increase, decrease} = countReducer.actions;
//xuất ra hàm reducer 
export default countReducer.reducer;