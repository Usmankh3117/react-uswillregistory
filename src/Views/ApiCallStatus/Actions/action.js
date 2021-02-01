export const ApiRejected = "API_CALL_REJECTED";
export const ApiFulfilled = "API_CALL_FULFILLED";
export const ApiRequested = "API_CALL_REQUESTED";
export const ApiClear = "API_CALL_CLEAR";
export const ClearApiByName = "CLEAR_API_BY_NAME";
export function ApiRejectedAction(data) {
  return {
    type: ApiRejected,
    payload: {
      statusCode: data.statusCode,
      apiCallFor: data.apiCallFor,
      isCompleted: true,
      isFailed: true,
      message: data.message,
    },
  };
}
export function ApiRequestedAction(data) {
  return {
    type: ApiRequested,
    payload: {
      apiCallFor: data.apiCallFor,
      isCompleted: false,
      isFailed: false,
      message: data.message,
    },
  };
}

export function ApiFulfilledAction(data) {
  return {
    type: ApiFulfilled,
    payload: {
      apiCallFor: data.apiCallFor,
      isCompleted: true,
      isFailed: false,
      message: data.message,
    },
  };
}
export function ApiClearAction() {
  return {
    type: ApiClear,
  };
}
export function ClearApiByNameAction(apiName) {
  return {
    type: ClearApiByName,
    payload: { apiName },
  };
}
