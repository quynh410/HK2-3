const cart = JSON.parse(localStorage.getItem('cart')||"[]");

const cartReducer= ( state= cart, action:any)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("add cart");
            /*
                Các bước làm khi đi mua hàng
                kiểm tra xem trong giỏ hàng của mình đã có sản phẩm đấy chưa 
                + nếu có thì tăng số lượng
                + nếu không thì thêm vào giỏ hàng
            */
           // Duyệt 
           let result = state.findIndex((item:any)=>{
                return item.id === action.payload.id;
           })
           // ham findIndex dung de xem phan tu cos ton tai trong mang hay ko neu cos tra ve vi tri ,neu ko co tra ve -1
           console.log(result);
           if(result === -1){
            // thêm vào giỏ hàng
            let product = {...action.payload,quantity:1}
            state.push(product)
            // tien hanh luu tren local
            localStorage.setItem('cart',JSON.stringify(state))
           }else{
            // tăng số lượng
            state[result].quantity = state[result].quantity + 1;
            localStorage.setItem('cart',JSON.stringify(state))
           }
            return[...state];
        case "INCREASE_QUANTITY":
            let increaseIndex = state.findIndex((item:any) => item.id === action.payload);
            console.log("111111",action );
            
            if (increaseIndex !== -1) {
              state[increaseIndex].quantity= state[increaseIndex].quantity + 1;
              localStorage.setItem('cart', JSON.stringify(state));
            }
            return[...state];

        case "DECREASE_QUANTITY":
            let decreaseIndex = state.findIndex((item:any) => item.id === action.payload);
            if (decreaseIndex !== -1) {
              state[decreaseIndex].quantity -= 1;
              if (state[decreaseIndex].quantity === 0) {
                state.splice(decreaseIndex, 1);
              }
              localStorage.setItem('cart', JSON.stringify(state));
            }
            return [...state];      
            case "REMOVE_CART":
                console.log(88888);
                
                let removeIndex = state.findIndex((item:any) => item.id === action.payload);
                if (removeIndex !== -1) {
                  state.splice(removeIndex, 1); 
                  localStorage.setItem('cart', JSON.stringify(state));
                }
                return [...state];
            case "UPDATE_CART":
                const { id, updatedItem } = action.payload;
                let updateIndex = state.findIndex((item:any) => item.id === id);
                if (updateIndex !== -1) {
                    state[updateIndex] = updatedItem;
                    localStorage.setItem('cart', JSON.stringify(state));
                }
                return [...state];
        default:
            return state;
    }
}
export default cartReducer