import {
  GET_TASKS,
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SORT_BY_DATE_ACS,
  SORT_BY_DATE_DECS,
  REVERSE_LIST
} from "./types";

export const getTasks = () => {
  return {
    type: GET_TASKS
  }
};

export const getTask = (id) => {
  return {
    type: GET_TASK,
    payload: id
  }
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task
  }
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
};

export const updateTask = (id) => {
  return {
    type: UPDATE_TASK,
    payload: id
  }
};

export const sortByDateAcs = () => {
  return {
    type: SORT_BY_DATE_ACS
  }
};

export const sortByDateDecs = () => {
  return {
    type: SORT_BY_DATE_DECS
  }
};

export const reverseList = () => {
  return {
    type: REVERSE_LIST
  }
};
