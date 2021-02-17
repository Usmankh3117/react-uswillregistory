import { combineReducers } from "redux";
import apicallStatusReducer from "../Views/ApiCallStatus/Reducer/apicallStatusReducer";
import authReducer from "./../Views/Auth/Reducer/auth";
import profileReducer from "./../Views/Profile/Reducer/profileReducer";
import questionReducer from "./../Views/QuestionsForm/Reducer/questionReducer";
export default combineReducers({
  apicallStatusReducer,
  authReducer,
  profileReducer,
  questionReducer
});
