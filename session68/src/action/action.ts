// khai bao cac hanh dong cho du an, khai bao ham 

export const actionBook = ((type:any, payload:any)=>{
    return {
        type: type,
        payload:payload
    }
})
// bình thường khi bắn action 
/*
    const dispatch = useDispatch({
        type: "ADD_BOOK",
        payload:{id:1, name:"hoa"}
    })

    const dispatch = useDispatch(actionBook("ADD_BOOK",{id:1, name:"hoa"}))
    disPatch(actionBook("DELETE_BOOK",11)
*/