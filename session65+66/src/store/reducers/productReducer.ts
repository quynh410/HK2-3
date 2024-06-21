import { Products } from "../../interface";

const initialProduct:Products[] =[
    {
        id:1,
        name:"hoa",
        cost:1000,
        quantity:10
    }
];

const productReducer = ( state = initialProduct, action:any)=>{
    switch (action.type) {
        default:
            return state;
    }
}
export default productReducer;