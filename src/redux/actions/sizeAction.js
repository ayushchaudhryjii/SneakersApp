import {FETCH_SIZE_REQUEST,FETCH_SIZE_SUCCESS,FETCH_SIZE_FAILURE} from '../ActionType';


export const fetchSizeRequest = () => ({
    type: FETCH_SIZE_REQUEST,
  });
  
  export const fetchSizeSuccess = (size) => ({
    type: FETCH_SIZE_SUCCESS,
    payload: size,
  });
  
  export const fetchSizeFailure = (error) => ({
    type: FETCH_SIZE_FAILURE,
    payload: error,
  });