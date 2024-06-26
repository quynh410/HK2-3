import { createSlice } from '@reduxjs/toolkit';

const numbersSlice = createSlice({
    name:"numbers",
    initialState:{
        numbers:[]
    },
    reducers:{
        generateRandomNumbers:(state:any,action:any)=>{
            const count = action.payload;
            state.numbers = Array.from({length:count},()=>Math.floor(Math.random()*100));
        }
    }
})

export const {generateRandomNumbers} = numbersSlice.actions;

export default numbersSlice.reducer;