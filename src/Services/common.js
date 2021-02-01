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
  setCookie("isVerified", "");
  setCookie("vesselCount", "");
  setCookie("isShipManager", "");
  setCookie("userId", "");
  setCookie("email", "");
  setCookie("logo", "");
  setCookie("roles", "");
  setCookie("permission", "");
  setCookie("isSubAdmin", "");
  setCookie("roleName", "");
  setCookie("subType", "");
  setCookie("activeVesselId", "");
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
