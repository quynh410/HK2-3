const initialRandomNumbers:[] = [];

const randomNumberReducer = (state = initialRandomNumbers, action:any) => {
  switch (action.type) {
    case 'ADD_RANDOM_NUMBER':
      return [...state, action.payload];
    default:
      return state; 
  }
};

export default randomNumberReducer;
