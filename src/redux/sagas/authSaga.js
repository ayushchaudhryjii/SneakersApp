import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import BASE_URL, { PRODUCTS_LIST, SEND_OTP, VERIFY_OTP } from "../../utils/EndPoint"; // Import the endpoints
import {
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  PROFILE_CREATION_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_REQUEST
} from "../ActionType";
import { fetchProductsSuccess,fetchProductsFailure } from "../actions/authAction";

function* sendOtpSaga(action) {
  console.log("action",action)
  try {
    const phone_number = action.payload;
    console.log("phone_number", phone_number);
    const response = yield call(axios.post, BASE_URL + SEND_OTP, { phone_number });
    console.log("API Response:", response); 
    yield put({ type: SEND_OTP_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error in sendOtpSaga:", error.message); 
    yield put({ type: SEND_OTP_FAILURE, payload: error.message });
  }
}

function* verifyOtpSaga(action) {
  try {
    const { phone, code } = action.payload;
    const response = yield call(axios.post, BASE_URL + VERIFY_OTP, {
      phone_number: `+91${phone}`,
      otp_code: code,
    });
    yield put({ type: VERIFY_OTP_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: VERIFY_OTP_FAILURE, payload: error.message });
  }
}

function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, BASE_URL + PRODUCTS_LIST); 
    console.log("Product API Response:", response); 

    // if (response && response.data && Array.isArray(response.data)) {
      yield put(fetchProductsSuccess(response.data)); 
    // } else {
    //   console.error('Invalid API response:', response);
    //   yield put(fetchProductsFailure("Invalid data format")); 
    // }
  } catch (error) {
    console.error("Error in fetchProductsSaga:", error.message);
    yield put(fetchProductsFailure(error.message)); 
  }
}





export default function* authSaga() {
  yield takeLatest(SEND_OTP_REQUEST, sendOtpSaga);
  yield takeLatest(VERIFY_OTP_REQUEST, verifyOtpSaga);
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);


}