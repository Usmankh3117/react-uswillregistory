import { getCookie } from "../Services/cookies";

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
  profile: {
    userDetail: {},
    cityList: [],
  },
  question: {
    sectionList: [],
    pageList: [],
    questions: {},
    stateList: [],
    answerList: [],
    charityList: [],
  },
  landing: {
    slugList: [],
    slugDetail: {},
  },
};
export default StoreState;
