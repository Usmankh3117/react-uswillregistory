import * as Actions from "../../ApiCallStatus/Actions/action";
import { getUserDetailAction } from "../Actions/action";
import { Constant } from "./../../../Constants/constant";
import { FETCH } from "../../../Services/fetch";
import { UpdateAuthCookiesState } from "../../../Services/common";
import { logInAction } from "../../Auth/Actions/action";

export function getUserDetail() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getUserDetail" }));
    let url =  Constant.apiURl + "/profile";
    let myJson = await FETCH("GET",url);
    if (myJson && myJson.status === "success") {
      dispatch(getUserDetailAction(myJson.user));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getUserDetail",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getUserDetail",
          message: myJson.errors,
        })
      );
    }
  };
}

export function updateUserDetail(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "updateUserDetail" }));
    let url =  Constant.apiURl + "/profile";
    let myJson = await FETCH("POST",url,data);
    if (myJson && myJson.status === "success") {
      dispatch(logInAction(UpdateAuthCookiesState(myJson)));
      dispatch(getUserDetailAction(myJson.user));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "updateUserDetail",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "updateUserDetail",
          message: myJson.errors,
        })
      );
    }
  };
}
