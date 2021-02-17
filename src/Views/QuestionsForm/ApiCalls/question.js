import * as Actions from "../../ApiCallStatus/Actions/action";
import { getFormSectionAction,getQuestionListAction } from "../Actions/action";
import { Constant } from "./../../../Constants/constant";
import { FETCH } from "../../../Services/fetch";

export function getFormSection() {
  return async (dispatch) => {
    dispatch(Actions.ApiRequestedAction({ apiCallFor: "getFormSection" }));
    let url = Constant.apiURl + "/sections";
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(
        getFormSectionAction({ sections: myJson.sections, pages: myJson.pages })
      );
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
    let url = Constant.apiURl + "/page-questions/"+pageId;
    let myJson = await FETCH("GET", url);
    if (myJson && myJson.status === "success") {
      dispatch(
        getQuestionListAction({ questions: myJson.questions, pageId: pageId })
      );
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
