const initialState = 0;

const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
const COUNTER_DECREMENT = 'COUNTER_DECREMENT';


const reducer = (state = initialState, action) => {
  const {type} = action;

  if(type === COUNTER_INCREMENT) {
    state = state + 1;   
  }

  if(type === COUNTER_DECREMENT) {
    state = state - 1;
  }

  return state;

}
export default reducer;


export const incrementCounterAction = () => {
  return {
    type: COUNTER_INCREMENT,
    payload: {}
  }
}

export const decerementCounterAction = () => {
  return {
    type: COUNTER_DECREMENT,
    payload: {}
  }
}


