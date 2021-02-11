import * as Actions from "../../ApiCallStatus/Actions/action";
import { getUserDetailAction } from "../../Profile/Actions/action";
import { logInAction, logOutAction } from "../Actions/action";
import { Constant } from "./../../../Constants/constant";
import { FETCH } from "../../../Services/fetch";
import { logoutUser, UpdateAuthCookiesState } from "../../../Services/common";

export function signUpUser(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "signUpUser" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/register", data);
    if (myJson && myJson.status === "success") {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "signUpUser",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "signUpUser",
          message: myJson.errors,
        })
      );
    }
  };
}

export function LoginUser(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "LoginUser" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/login", {
      email: data.email,
      password: data.password,
    });
    if (myJson && myJson.status === "success") {
      dispatch(logInAction(UpdateAuthCookiesState(myJson)));
      dispatch(getUserDetailAction(myJson.user));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "LoginUser",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "LoginUser",
          message: myJson.errors,
        })
      );
    }
  };
}

export function LogoutUser(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "LogoutUser" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/logout");
    if (myJson && myJson.status === "success") {
      logoutUser();
      dispatch(logOutAction());
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "LogoutUser",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "LogoutUser",
          message: myJson.errors,
        })
      );
    }
  };
}

export function forgotPassword(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "forgotPassword" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/reset-password-link", {
      email: data.email,
    });
    if (myJson && myJson.status === "success") {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "forgotPassword",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "forgotPassword",
          message: myJson.errors,
        })
      );
    }
  };
}

export function resetPassword(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "resetPassword" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/reset-password", data);
    if (myJson && myJson.code === 200) {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "resetPassword",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "resetPassword",
          message: myJson.message,
        })
      );
    }
  };
}

export function verifyUser(userId) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "verifyUser" }));
    let url = Constant.apiURl + "/verify/" + userId;
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "verifyUser",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "verifyUser",
          message: myJson.message,
        })
      );
    }
  };
}


