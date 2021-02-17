export const getFormSection = "GET_FORM_SECTION";
export const getQuestionList = "GET_QUESTION_LIST";

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
