export const LoginSuccessful = "LOGIN_SUCCESSFUL";
export const LogOutSuccessful = "LOGOUT_SUCCESSFUL";
export const verifyUser = "VERIFY_USER";
export const adminLogin = "ADMIN_LOGIN";
export const updateRoles = "UPDATE_ROLES_AUTH";

export function logInAction(data) {
  return {
    type: LoginSuccessful,
    payload: data,
  };
}
export function logOutAction() {
  return {
    type: LogOutSuccessful,
    payload: {
      isLogin: false,
      token: "",
      userType: "",
      userId: "",
      user: {},
    },
  };
}
export function verifyUserAction(val) {
  return {
    type: verifyUser,
    payload: { val: val },
  };
}
export function adminLoginAction(token, userType) {
  return {
    type: adminLogin,
    payload: {
      isLogin: true,
      token,
      userType,
    },
  };
}

export function updateRolesAction(roles) {
  return {
    type: updateRoles,
    payload: { roles },
  };
}
