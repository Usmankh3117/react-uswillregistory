import { getUserDetail } from "./../Actions/action";
import StoreState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";

export default function ProfileReducer(state = StoreState.profile, action) {
  switch (action.type) {
    case getUserDetail:
      var s = cloneDeep(state);
      s.userDetail = action.payload.data;
      return s;

    default:
      return state;
  }
}
