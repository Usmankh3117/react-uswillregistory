import * as Action from "./../Actions/action";
import InitialState from "./../../../Constants/initialState";
import cloneDeep from "lodash/cloneDeep";

export default function ApiCallStatusReducer(
  state = InitialState.apiCall,
  action
) {
  switch (action.type) {
    case Action.ApiRequested:
      let s = Object.assign(state);
      let data = cloneDeep(s);
      data.apiCallFor = action.payload.apiCallFor;
      data.isCompleted = action.payload.isCompleted;
      data.isFailed = action.payload.isFailed;
      data.statusCode = "";
      data.message = action.payload.message;
      let array = data.isStarted.slice(0);
      if (array.length > 0) {
        let index = array.indexOf(action.payload.apiCallFor);
        if (index === -1) {
          array.push(action.payload.apiCallFor);
        }
      } else {
        array.push(action.payload.apiCallFor);
      }
      let array4 = [];
      if (data.isError.length > 0) {
        array4 = data.isError.slice(0);
      }
      if (array4.length > 0) {
        let index = array4.findIndex(
          (x) => x.apiCallFor === action.payload.apiCallFor
        );
        if (index > -1) {
          array4.splice(index, 1);
        }
      }
      data.isError = array4;
      data.isStarted = array;
      return data;

    case Action.ApiRejected:
      let s1 = Object.assign(state);
      let data1 = cloneDeep(s1);
      data1.apiCallFor = action.payload.apiCallFor;
      data1.isCompleted = action.payload.isCompleted;
      data1.isFailed = action.payload.isFailed;
      data1.statusCode = action.payload.statusCode;
      data1.message = action.payload.message;
      if (data1.isStarted.length > 0) {
        for (let i = 0; i < data1.isStarted.length; i++) {
          let element = data1.isStarted[i];
          if (element === action.payload.apiCallFor) {
            data1.isStarted.splice(i, 1);
            break;
          }
        }
      }
      let array2 = [];
      if (data1.isError.length > 0) {
        array2 = data1.isError.slice(0);
      }
      if (array2.length > 0) {
        let index = array2.findIndex(
          (x) => x.apiCallFor === action.payload.apiCallFor
        );
        if (index === -1) {
          array2.push({
            apiCallFor: action.payload.apiCallFor,
            message: action.payload.message,
          });
        } else if (index > -1) {
          array2[index].message = action.payload.message;
        }
      } else {
        array2.push({
          apiCallFor: action.payload.apiCallFor,
          message: action.payload.message,
        });
      }
      data1.isError = array2;
      return data1;

    case Action.ApiFulfilled:
      let s2 = Object.assign(state);
      let data2 = cloneDeep(s2);
      data2.apiCallFor = action.payload.apiCallFor;
      data2.isCompleted = action.payload.isCompleted;
      data2.statusCode = 200;
      data2.isFailed = action.payload.isFailed;
      data2.message = action.payload.message;
      if (data2.isStarted.length > 0) {
        for (let i = 0; i < data2.isStarted.length; i++) {
          let element = data2.isStarted[i];
          if (element === action.payload.apiCallFor) {
            data2.isStarted.splice(i, 1);
            break;
          }
        }
      }
      let array3 = [];
      if (data2.isError.length > 0) {
        array3 = data2.isError.slice(0);
      }
      if (array3.length > 0) {
        let index = array3.findIndex(
          (x) => x.apiCallFor === action.payload.apiCallFor
        );
        if (index > -1) {
          array3.splice(index, 1);
        }
      }
      data2.isError = array3;
      return data2;

    case Action.ApiClear:
      let s3 = Object.assign(state);
      s3.apiCallFor = "";
      s3.isCompleted = true;
      s3.statusCode = "";
      s3.isFailed = false;
      s3.message = "";
      s3.isStarted = [];
      s3.isError = [];
      return s3;

    case Action.ClearApiByName:
      let s4 = Object.assign(state);
      let apiName = action.payload.apiName;
      if (s4.apiCallFor === apiName) {
        s4.apiCallFor = "";
      }
      let index = s4.isStarted.indexOf(apiName);
      if (index !== -1) {
        s4.isStarted.splice(index, 1);
      }
      return s4;

    default:
      return state;
  }
}
