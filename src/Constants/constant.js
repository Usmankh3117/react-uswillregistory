var env = "development";
export const Constant = {
  apiURl:
    env === "development"
      ? "http://www.freewillapi.theuswillregistry.org/api/v1"
      : "http://localhost:8080/v1",
  cookieExpireDays: 1,
};
