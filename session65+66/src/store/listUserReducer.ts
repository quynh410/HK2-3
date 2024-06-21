import { ListUser } from "../interface";

const innitialListUser:ListUser[] = [
    {
        id:1,
        name:'Nguyễn Thị Thu Quỳnh',
        gender:'Female',
        date:'2000-01-01',
        address:'Hà Nội',
    },
    {
        id:2,
        name:'Nguyễn Văn A',
        gender:'Male',
        date:'2000-01-01',
        address:'Hà Nội',
    }
]
const listUserReducer = (state=innitialListUser, action:any)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default listUserReducer