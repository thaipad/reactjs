import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { deleteTask } from "../actions/taskActions";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import '../css/common.css';

class TaskDetail extends Component {
  state = { showContent: false };

  onDeleteAction = (id) => {
    this.props.deleteTask(id);
  };

  toggleContent = () => {
    this.setState({showContent: !this.state.showContent});
  };

  render() {
    const {showContent} = this.state;
    const {id, name, description, time, date, duration, complete} = this.props.task;
    const styleTask = complete ?
      {cursor: 'pointer', textDecorationLine: 'line-through'} :
      {cursor: 'pointer'};
    return (
      <div className="card card-body mb-3">
        <h4 style={{cursor: 'pointer'}}>
          <i className="fas fa-sort-down"
             style={styleTask}
             onClick={this.toggleContent}>
            <FontAwesomeIcon icon={complete ? 'check-square' : 'square'}/>
            {' '}{name} ({duration}){' '}
            <FontAwesomeIcon icon={showContent ? 'sort-up' : 'sort-down'}/>
          </i>
          <FontAwesomeIcon icon="trash"
                           style={{cursor: 'pointer', float: 'right', color: 'red', fontSize: 'small'}}
                           onClick={this.onDeleteAction.bind(this, id)}/>
        </h4>
        {showContent === true ?
          <ul>
            <li>{description}</li>
            <li>date/time: {date} {time}</li>
            <li style={{fontSize: 'smaller'}}>id: {id}</li>
          </ul>
          : ""}
      </div>
    )
  }
}

TaskDetail.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired
}

export default connect(null, {deleteTask})(TaskDetail);
