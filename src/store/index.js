import {createStore, combineReducers} from 'redux';

import counter from './counter';


const reducers = combineReducers({
  // put the reducers here
})

export default createStore(reducers)