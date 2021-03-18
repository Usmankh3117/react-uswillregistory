import {
  getFormSection,
  getQuestionList,
  getStatesList,
  getAllAnswer,
  getCharityList,
  updateAnswer,
} from "./../Actions/action";
import StoreState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";
import { act } from "react-dom/test-utils";

export default function questionReducer(state = StoreState.question, action) {
  switch (action.type) {
    case getFormSection:
      let s = cloneDeep(state);
      s.sectionList = action.payload.sections;
      s.pageList = action.payload.pages;
      return s;

    case getQuestionList:
      let s1 = cloneDeep(state);
      s1.questions[action.payload.pageId] = action.payload.questions;
      return s1;

    case getStatesList:
      let s2 = cloneDeep(state);
      s2.stateList = action.payload;
      return s2;

    case getAllAnswer:
      let s3 = cloneDeep(state);
      s3.answerList = action.payload;
      return s3;

    case updateAnswer:
      let s4 = cloneDeep(state);
      s4.answerList[action.payload.pageId] = action.payload.data;
      return s4;

    case getCharityList:
      let s5 = cloneDeep(state);
      s5.charityList = action.payload;
      return s5;

    default:
      return state;
  }
}
