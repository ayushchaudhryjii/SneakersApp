import {FETCH_YEAR_REQUEST,FETCH_YEAR_SUCCESS,FETCH_YEAR_FAILURE} from '../ActionType';


export const fetchYearRequest = () => ({
    type: FETCH_YEAR_REQUEST,
  });
  
  export const fetchYearSuccess = (year) => ({
    type: FETCH_YEAR_SUCCESS,
    payload: year,
  });
  
  export const fetchYearFailure = (error) => ({
    type: FETCH_YEAR_FAILURE,
    payload: error,
  });