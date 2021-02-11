export const getUserDetail = "GET_USER_DETAIL";
export const getCityByState = "GET_CITY_BY_STATE";

export function getUserDetailAction(data) {
  return {
    type: getUserDetail,
    payload: data,
  };
}
export function getCityByStateAction(data) {
  return {
    type: getCityByState,
    payload: data,
  };
}