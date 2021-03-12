/* eslint-disable no-useless-escape */
import { getCookie, setCookie } from "./cookies";

export function getHeaders(isFormData) {
  let token = getCookie("token");
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  if (token) {
    headers["Authorization"] = "Bearer " + token;
    headers["access-token"] = token;
  }
  if (isFormData) {
    delete headers["Accept"];
    delete headers["Content-Type"];
  }
  return headers;
}

export function logoutUser() {
  setCookie("token", "");
  setCookie("userType", "");
  setCookie("userId", "");
  setCookie("email", "");
}

export const Sum = (a, b) => {
  let num = parseInt(a);
  let num2 = parseInt(b);
  let res = 0;
  if (!isNaN(num)) {
    res += num;
  }
  if (!isNaN(num2)) {
    res += num2;
  }
  return res;
};

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getYearList() {
  let arr = [];
  for (let index = 1921; index <= 2021; index++) {
    arr.push(index);
  }
  return arr;
}

export function UpdateAuthCookiesState(myJson) {
  let token = myJson.access_token ? myJson.access_token : getCookie("token");
  let userType = myJson.user.user_type;
  let userId = myJson.user.id;
  let email = myJson.user.email;
  setCookie("token", token);
  setCookie("userType", userType);
  setCookie("userId", userId);
  setCookie("email", email);
  return {
    isLogin: true,
    token,
    user: myJson.user,
  };
}
