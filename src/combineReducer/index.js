import { combineReducers } from "redux";
import apicallStatusReducer from "../Views/ApiCallStatus/Reducer/apicallStatusReducer";
import authReducer from "./../Views/Auth/Reducer/auth";
import profileReducer from "./../Views/Profile/Reducer/profileReducer";
export default combineReducers({
  apicallStatusReducer,
  authReducer,
  profileReducer,
});
