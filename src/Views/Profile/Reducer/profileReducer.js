import { getUserDetail, getCityByState } from "./../Actions/action";
import StoreState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";

export default function ProfileReducer(state = StoreState.profile, action) {
  switch (action.type) {
    case getUserDetail:
      let s = cloneDeep(state);
      s.userDetail = action.payload;
      return s;

    case getCityByState:
      let s1 = cloneDeep(state);
      s1.cityList = action.payload;
      return s1;
    default:
      return state;
  }
}
