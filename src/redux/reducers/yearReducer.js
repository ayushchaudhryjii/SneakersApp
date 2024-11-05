import {
    FETCH_YEAR_REQUEST,
    FETCH_YEAR_SUCCESS,
    FETCH_YEAR_FAILURE,
  } from "../ActionType";
  
  const initialState = {
    loading: false,
    year: [],
    error: null,
  };
  
  const yearReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_YEAR_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_YEAR_SUCCESS:
        return { ...state, loading: false, year: action.payload };
  
      case FETCH_YEAR_FAILURE:
        return { ...state, loading: false, year: action.payload };
  
      default:
        return state;
    }
  };
  
  export default yearReducer;