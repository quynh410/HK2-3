import React, { useReducer } from 'react';

export default function UseReducer() {
    let initial = {
        count: 0,
        product: {},
        products: {},
        isLoading: false,
    };

    const reducer = (state:any, action:any) => {
        switch (action) {
            case "increase":
                return state + 1;
            case "decrease":
                return state - 1;
            default:
                return state;
        }
    };
    
    let initialCount = 0;
    const [state, dispatch] = useReducer(reducer, initialCount);

    const handleIncrease = () => {
        dispatch('increase');
    };

    const handleDecrease = () => {
        dispatch('decrease' );
    };

    console.log("11111");

    return (
        <div>
            <p>Giá trị biến cao : {state}</p>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>
    );
}
