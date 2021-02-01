import {
  LoginSuccessful,
  LogOutSuccessful,
  verifyUser,
  updateRoles,
} from "./../Actions/action";
import StoreState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";

export default function AuthReducer(state = StoreState.auth, action) {
  switch (action.type) {
    case LoginSuccessful:
      return action.payload;

    case LogOutSuccessful:
      return action.payload;

    case verifyUser:
      var s = cloneDeep(state);
      s.isVerified = action.payload.val;
      return s;

    case updateRoles:
      var s1 = cloneDeep(state);
      s1.roles = action.payload.roles;
      return s1;

    default:
      return state;
  }
}
