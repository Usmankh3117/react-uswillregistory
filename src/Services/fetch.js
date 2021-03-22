import Swal from "sweetalert2";
import { getHeaders, logoutUser } from "./common";
export async function FETCH(type, url, body, isFormData, customHeaders, isEncryptData) {
  let headers = {
    method: type,
    headers: customHeaders ? customHeaders : getHeaders(isFormData),
  };
  if (isFormData === true) {
    headers.body = body;
  } else {
    if (body) {
      headers.body = JSON.stringify(body);
    }
  }
  return await fetch(url, headers)
    .then(async function (response) {
      if (response.status === 401 && response.statusText === "Unauthorized") {
        logoutUser();
        window.location = "/login?msg=expired";
      }
      return {
        ...(await response.json()),
        statusCode: response.status,
      };
    })
    .then(function (myJson) {
      return myJson;
    })
    .catch((error) => {
      return error;
    });
}
