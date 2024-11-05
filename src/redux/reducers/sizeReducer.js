import {
    FETCH_SIZE_REQUEST,
    FETCH_SIZE_SUCCESS,
    FETCH_SIZE_FAILURE,
  } from "../ActionType";
  
  const initialState = {
    loading: false,
    size: [],
    error: null,
  };
  
  const sizeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SIZE_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_SIZE_SUCCESS:
        return { ...state, loading: false, size: action.payload };
  
      case FETCH_SIZE_FAILURE:
        return { ...state, loading: false, size: action.payload };
  
      default:
        return state;
    }
  };
  
  export default sizeReducer;