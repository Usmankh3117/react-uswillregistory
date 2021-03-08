import { getSlugPages, getSlugDetail } from "./../Actions/action";
import StoreState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";

export default function AuthReducer(state = StoreState.landing, action) {
  switch (action.type) {
    case getSlugDetail:
      var s = cloneDeep(state);
      s.slugDetail = action.payload;
      return s;

      case getSlugPages:
        var s1 = cloneDeep(state);
        s1.slugList = action.payload;
        return s1;

    default:
      return state;
  }
}
