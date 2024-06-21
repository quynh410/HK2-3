import { Profile } from "../../interface";

const innitialProfile:Profile[]=[
    {
      id:1,
    userName:'Minh Thu',
    gender:'Male',
    date:"2000",
    address:'Ha Noi',  
    }
];

const  profileReducer = (state=innitialProfile, action:any)=>{
    switch (action.type) {
        default:
            return state;
    }
}
export default profileReducer;