import { combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  // other reducers
});

export default rootReducer;
