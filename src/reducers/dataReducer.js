import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

const initialState = {
  data: null,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, data: null, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
