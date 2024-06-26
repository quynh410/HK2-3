import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
    name:"todoListSlice",
    initialState:{
        jobs:[
            {
                id:1,
                name:"học lập trình"
            },
            {
                id:2,
                name:"redux-toolkit"
            },
            {
                id:3,
                name:"cầu lông"
            },
        ],
    },
    reducers:{
        add:(state:any,action:any)=>{
            state.jobs.push(action.payload);
        },
        deleteJob:(state:any,action:any)=>{
        state.jobs = state.jobs.filter((item:any)=>{
                return item.id!== action.payload;
            })
        },
        update:(state:any,action:any)=>{
            let index  = state.jobs.findIndex((item:any)=>item.id === action.payload.id)      
            state.jobs.splice(index,1,action.payload);     
        }

    },
})

export const {add,deleteJob, update} = todoListReducer.actions;

export default todoListReducer.reducer;