import React, {Component} from 'react';
import PostData from './data/mosk.json';
import uuid from 'uuid';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ITEM':
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      };
    case 'ADD_ITEM':
      action.payload.id = uuid();
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case 'SORT_BY_DATE_ACS':
      return {
        ...state,
        tasks: state.tasks.sort((a, b)=>a.date < b.date)
      };
    case 'SORT_BY_DATE_DECS':
      return {
        ...state,
        tasks: state.tasks.sort((a, b)=>a.date > b.date)
      };
    case 'REVERSE':
      return {
        ...state,
        tasks: state.tasks.reverse()
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: PostData,
      dispatch: action => {
        this.setState(state => reducer(state, action));
      }
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
