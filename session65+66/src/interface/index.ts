// export interface Job{
//     id:number,
//     name:string,
//     status:boolean,
// }   
export interface Profile{
    id:number,
    userName:string,
    gender:string,
    date:string,
    address:string,
}
export interface ListUser {
    id:number,
    name:string,
    gender:string,
    date:string,
    address:string,
}
export interface Products {
    id:number;
    name:string;
    cost:number;
    quantity:number;
}
export interface Random {
    type:"ADD_RANDOM_NUMBER";
    payload:number,
}