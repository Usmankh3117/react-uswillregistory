import * as Actions from "../../ApiCallStatus/Actions/action";
import { Constant } from "./../../../Constants/constant";
import { getSlugDetailAction, getSlugPagesAction } from "../Actions/action";
import { FETCH } from "../../../Services/fetch";

export function getSlugPages() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getSlugPages" }));
    let url = Constant.apiURl + "/pages/active";
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(getSlugPagesAction(myJson.pages));
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

export function getSlugDetail(slugCode) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getSlugDetail" }));
    let url = Constant.apiURl + "/page/"+slugCode;
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(getSlugDetailAction({}));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getSlugDetail",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getSlugDetail",
          message: myJson.message,
        })
      );
    }
  };
}
