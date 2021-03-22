import * as Actions from "../../ApiCallStatus/Actions/action";
import {
  getFormSectionAction,
  getQuestionListAction,
  getStatesListAction,
  getCharityListAction,
  getAllAnswerAction,
  updateAnswerAction
} from "../Actions/action";
import { Constant } from "./../../../Constants/constant";
import { FETCH } from "../../../Services/fetch";

export function getFormSection() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getFormSection" }));
    let url = Constant.apiURl + "/sections";
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(getFormSectionAction({ sections: myJson.sections, pages: myJson.pages }));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getFormSection",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getFormSection",
          message: myJson.errors,
        })
      );
    }
  };
}

export function getQuestionList(pageId) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getQuestionList" }));
    let url = Constant.apiURl + "/page-questions/" + pageId;
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(getQuestionListAction({ questions: myJson.questions, pageId: pageId }));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getQuestionList",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getQuestionList",
          message: myJson.errors,
        })
      );
    }
  };
}

export function getStateList() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getStateList" }));
    let url = Constant.apiURl + "/states";
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      let arr = [];
      myJson.states.forEach((element) => {
        arr.push({
          id: element.id,
          value: element.state_abbr,
          label: element.state_name,
        });
      });
      dispatch(getStatesListAction(arr));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getStateList",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getStateList",
          message: myJson.errors,
        })
      );
    }
  };
}

export function getChartiyList() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getChartiyList" }));
    let url = Constant.apiURl + "/charities";
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      let arr = [];
      myJson.charities.forEach((element) => {
        arr.push({
          id: element.id,
          value: element.slug,
          label: element.name,
        });
      });
      dispatch(getCharityListAction(arr));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getChartiyList",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getChartiyList",
          message: myJson.errors,
        })
      );
    }
  };
}

export function pageForAnswers(data, pageId) {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "pageForAnswers" }));
    let url = Constant.apiURl + "/answers/" + pageId;
    let myJson = await FETCH("POST", url, data);
    if (myJson && myJson.status === "success") {
      dispatch(updateAnswerAction(myJson.page_answers))
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "pageForAnswers",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "pageForAnswers",
          message: myJson.errors,
        })
      );
    }
  };
}

export function getAllAnswer() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getAllAnswer" }));
    let url = Constant.apiURl + "/answers";
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      // myJson.answers
      dispatch(getAllAnswerAction(myJson.answers));
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "getAllAnswer",
          message: myJson.message,
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "getAllAnswer",
          message: myJson.errors,
        })
      );
    }
  };
}

export function sendEmail() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "sendEmail" }));
    let url = Constant.apiURl + "/email-and-download-document";
    let myJson = await FETCH("POST", url);
    if (myJson && myJson.status === "success") {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "sendEmail",
          message: myJson.message ? myJson.message : "Link has been sent to your email address",
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "sendEmail",
          message: myJson.errors,
        })
      );
    }
  };
}

export function downloadWill() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "downloadWill" }));
    let url = Constant.apiURl + "/download-doc";
    let myJson = await FETCH("POST", url);
    if (myJson && myJson.status === "success") {
      dispatch(
        Actions.ApiFulfilledAction({
          apiCallFor: "downloadWill",
          message: myJson.message ? myJson.message : "",
        })
      );
    } else {
      dispatch(
        Actions.ApiRejectedAction({
          statusCode: myJson.statusCode,
          apiCallFor: "downloadWill",
          message: myJson.errors,
        })
      );
    }
  };
}
