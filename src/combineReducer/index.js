import { combineReducers } from "redux";
import apicallStatusReducer from "../Views/ApiCallStatus/Reducer/apicallStatusReducer";
import authReducer from "./../Views/Auth/Reducer/auth";
export default combineReducers({
  apicallStatusReducer,
  authReducer,
});
