export const getFormSection = "GET_FORM_SECTION";
export const getQuestionList = "GET_QUESTION_LIST";
export const getStatesList = "GET_STATE_LIST";
export const getAllAnswer = "GET_ALL_ANSWER";
export const updateAnswer = "UPDATE_ANSWER";

export function getFormSectionAction(data) {
  return {
    type: getFormSection,
    payload: data,
  };
}

export function getQuestionListAction(data) {
  return {
    type: getQuestionList,
    payload: data,
  };
}

export function getStatesListAction(data) {
  return {
    type: getStatesList,
    payload: data,
  };
}

export function getAllAnswerAction(data) {
  return {
    type: getAllAnswer,
    payload: data,
  };
}

export function updateAnswerAction(data, pageId) {
  return {
    type: updateAnswer,
    payload: { data, pageId },
  };
}
