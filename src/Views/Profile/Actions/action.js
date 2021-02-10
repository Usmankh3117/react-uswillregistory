export const getUserDetail = "GET_USER_DETAIL";

export function getUserDetailAction(data) {
  return {
    type: getUserDetail,
    payload: data,
  };
}