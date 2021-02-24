import * as Actions from "../../ApiCallStatus/Actions/action";
import { Constant } from "./../../../Constants/constant";
import { FETCH } from "../../../Services/fetch";

export function getSlugPages() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getSlugPages" }));
    let url = Constant.apiURl + "/verify/" + userId;
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getSlugPages",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getSlugPages",
          message: myJson.message,
        })
      );
    }
  };
}
