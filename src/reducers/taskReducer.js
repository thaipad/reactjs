import TaskData from '../data/mosk.json';
import {
  GET_TASKS,
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SORT_BY_DATE_DECS,
  SORT_BY_DATE_ACS,
  REVERSE_LIST
} from "../actions/types";
import uuid from 'uuid';

const initialState = {
  tasks: TaskData,
  task: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state
      }
    case GET_TASK:

      return {
        ...state,
        task: state.tasks.find(item => item.id === action.payload)
      }
    case ADD_TASK:
      action.payload.id = uuid();
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    case UPDATE_TASK:
     return {
        ...state,
        tasks: [action.payload, ...state.tasks.filter(item => item.id !== action.payload.id)]
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      }
    case SORT_BY_DATE_ACS:
      return {
        ...state,
        tasks: state.tasks.sort((a, b)=>a.date < b.date)
      };
    case SORT_BY_DATE_DECS:
      return {
        ...state,
        tasks: state.tasks.sort((a, b)=>a.date > b.date)
      };
    case REVERSE_LIST:
      return {
        ...state,
        tasks: state.tasks.reverse()
      };
    default:
      return state;
  }
}
