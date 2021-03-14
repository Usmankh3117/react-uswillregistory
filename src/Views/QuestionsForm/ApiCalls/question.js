import * as Actions from "../../ApiCallStatus/Actions/action";
import {
  getFormSectionAction,
  getQuestionListAction,
  getStatesListAction,
  getCharityListAction,
  getAllAnswerAction,
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
