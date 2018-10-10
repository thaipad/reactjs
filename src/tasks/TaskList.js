import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskDetail from './TaskDetail';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  getTasks,
  reverseList,
  sortByDateAcs,
  sortByDateDecs
} from "../actions/taskActions";

import '../css/common.css';

class TaskList extends Component {
  state = { isOldestFirst: true };

  componentDidMount() {
    this.props.getTasks();
  }

  toggleListReverse = () => {
    this.props.reverseList();
    this.setState({isOldestFirst: this.state.isOldestFirst});
  };

  toggleSortDate = () => {
    if (this.state.isOldestFirst) {
      this.props.sortByDateDecs();
    } else {
      this.props.sortByDateAcs();
    }
    this.setState({isOldestFirst: !this.state.isOldestFirst});
  };

  render() {
    const {isOldestFirst} = this.state;
    const {tasks} = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Task</span> list
          <FontAwesomeIcon
          style={{cursor: 'pointer', float: 'right', fontSize: "large"}}
          icon="sort"
          onClick={this.toggleListReverse}/>
          <FontAwesomeIcon
          style={{cursor: 'pointer', float: 'right', fontSize: "large"}}
          icon={isOldestFirst ? "sort-amount-up" : "sort-amount-down"}
          onClick={this.toggleSortDate}/>
        </h1>
        {tasks.map((task, index) => {
          return (<TaskDetail task={task}/>)
        })}
      </React.Fragment>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  getTasks: PropTypes.func.isRequired,
  sortByDateAcs: PropTypes.func.isRequired,
  sortByDateDecs: PropTypes.func.isRequired,
  reverseList: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  tasks: state.task.tasks
});

export default connect(
  mapStateToProps,
  {getTasks, sortByDateAcs, sortByDateDecs, reverseList}
)(TaskList);
