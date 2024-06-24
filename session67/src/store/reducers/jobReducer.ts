import { JobTodo } from "../../interface";

// let stateJob:JobTodo[]=[
//     {
//         id:1,
//         name:"học redex",
//         status:false,
//         level:"quan trọng"
//     },
//     {
//         id:2,
//         name:"cầu lông",
//         status:false,
//         level:"bình thường"
//     }

// ];
let stateJob:JobTodo[]= JSON.parse(localStorage.getItem("jobs")||"[]");
const jobReducer= (state = stateJob, action:any) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("Đã vào case thêm công việc");
            localStorage.setItem(
                "jobs", JSON.stringify([...state, action.payload])
            )
            return [...state,action.payload];
        case "DELETE_TODO":
            return [...state];
        case "UPDATE_TODO":
            return [...state];
        default:
            return state;
    }
}
export default jobReducer;
