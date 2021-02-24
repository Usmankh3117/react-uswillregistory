import Action from "./../Actions/action";
  import StoreState from "./../../../Constants/initialState";
  import cloneDeep from "lodash/cloneDeep";
  
  export default function AuthReducer(state = StoreState.landing, action) {
    switch (action.type) {
      case verifyUser:
        var s = cloneDeep(state);
        s.isVerified = action.payload.val;
        return s;
  
      default:
        return state;
    }
  }
  