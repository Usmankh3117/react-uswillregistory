import * as Actions from "../../ApiCallStatus/Actions/action";
import { logInAction } from "../Actions/action";
import { Constant } from "./../../../Constants/constant";
import { FETCH } from "../../../Services/fetch";
import { setCookie } from "../../../Services/cookies";

export function signUpUser(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "signUpUser" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/register", data);
    if (myJson && myJson.code === 200) {
      // dispatch(logInAction(UpdateAuthCookiesState(myJson)));
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
          message: myJson.message,
        })
      );
    }
  };
}

export function LoginUser(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "LoginUser" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/auth/login", {
      email: data.email,
      password: data.password,
    });
    if (myJson && myJson.code === 200) {
      dispatch(logInAction(UpdateAuthCookiesState(myJson)));
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
          message: myJson.message,
        })
      );
    }
  };
}

export function forgotPassword(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "forgotPassword" }));
    let myJson = await FETCH(
      "POST",
      Constant.apiURl + "/auth/send-password-reset",
      {
        email: data.email,
      }
    );
    if (myJson && myJson.code === 200) {
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
          message: myJson.message,
        })
      );
    }
  };
}

export function resetPassword(data) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "resetPassword" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/auth/reset-password", {
      password: data.password,
      resetToken: data.token,
    });
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

export function validateToken(token) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "validateToken" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/auth/validate-token", {
      access_token: token,
    });
    if (myJson && myJson.code === 200) {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "validateToken",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "validateToken",
          message: myJson.message,
        })
      );
    }
  };
}

export function verifyUser(userId) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "verifyUser" }));
    let myJson = await FETCH("POST", Constant.apiURl + "/auth/verify-user", {
      userId,
    });
    if (myJson && myJson.code === 200) {
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

function UpdateAuthCookiesState(myJson) {
  let token = myJson.token.accessToken;
  let userType = myJson.user.type;
  let isFirstTimeLogin = myJson.user.isFirstTimeLogin;
  let isVerified = true;
  let userId = myJson.user.id;
  let email = myJson.user.email;
  let logo = myJson.user.logo;
  let roles = [];
  if (myJson.user.roles && myJson.user.roles.length > 0) {
    myJson.user.roles.forEach((element) => {
      roles.push(element.path);
    });
  }
  let isSubAdmin =
    myJson.user.roleName && myJson.user.roleName !== "" ? true : false;
  let permission = myJson.user.permission;
  setCookie("activeVesselId", myJson.user.vesselId);
  setCookie("roleName", myJson.user.roleName);
  setCookie("vesselCount", myJson.user.vesselCount);
  setCookie("isShipManager", myJson.user.isShipManager);
  setCookie("isFirstTimeLogin",isFirstTimeLogin);
  setCookie("token", token);
  setCookie("userType", userType);
  setCookie("isVerified", isVerified);
  setCookie("userId", userId);
  setCookie("email", email);
  setCookie("logo", logo.originalname);
  setCookie("roles", JSON.stringify(roles));
  setCookie("permission", JSON.stringify(myJson.user.permission));
  setCookie("isSubAdmin", isSubAdmin);
  setCookie("subType", myJson.user.subType);
  return {
    isLogin: true,
    token,
    userType,
    isShipManager: myJson.user.isShipManager,
    isFirstTimeLogin,
    isVerified,
    userId,
    logo,
    roles,
    permission,
    isSubAdmin,
    activeVesselId: myJson.user.vesselId,
    subType: myJson.user.subType,
    roleName: myJson.user.roleName,
  };
}
