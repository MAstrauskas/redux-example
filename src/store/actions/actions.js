import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (number) => {
  return {
    type: actionTypes.ADD,
    value: number,
  };
};

export const subtract = (number) => {
  return {
    type: actionTypes.SUBTRACT,
    value: number,
  };
};

export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id,
  };
};
