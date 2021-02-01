
import { getHeaders, logoutUser } from "./common";
import { setCookie } from "./cookies";
export async function FETCH(
  type,
  url,
  body,
  isFormData,
  customHeaders,
  isEncryptData
) {
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
      return {
        ...(await response.json()),
        statusCode: response.status,
      };
    })
    .then(function (myJson) {
      if (myJson.statusCode === 401 && (myJson.message === "jwt expired" || myJson.message === "Unauthorized")) {
        setCookie("isTokenExpire", "true");
        logoutUser();
        window.location = "/login";
      }
      return myJson;
    })
    .catch((error) => {
      console.log(error.statusCode, error);
      return error;
    });
}