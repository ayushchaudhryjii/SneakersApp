import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import brandReducer from "./reducers/brandReducer";
import sizeReducer from "./reducers/sizeReducer";
import yearReducer from "./reducers/yearReducer";
const rootReducer = combineReducers({
    auth : authReducer,
    products:productReducer,
    brand:brandReducer,
    size:sizeReducer,
    year: yearReducer,
})
export default rootReducer;