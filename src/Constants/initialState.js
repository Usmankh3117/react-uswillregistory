import { getCookie } from "../Services/cookies";
var roles = getCookie("roles");
roles = roles !== "" ? JSON.parse(roles) : [];
let permission = getCookie("permission");
permission = permission !== "" ? JSON.parse(permission) : {};
var StoreState = {
  auth: {
    isLogin: getCookie("token") === "" ? false : true,
    token: getCookie("token"),
    userType: getCookie("userType"),
    userId: getCookie("userId"),
    user: {},
  },
  apiCall: {
    apiCallFor: "",
    statusCode: "",
    isCompleted: true,
    isFailed: false,
    message: "",
    isStarted: [],
    isError: [],
  },
};
export default StoreState;
