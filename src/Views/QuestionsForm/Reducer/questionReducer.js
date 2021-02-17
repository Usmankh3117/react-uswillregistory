import { getFormSection, getQuestionList } from "./../Actions/action";
import StoreState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";

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
    default:
      return state;
  }
}
