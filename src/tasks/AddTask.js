import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTask} from '../actions/taskActions';
import {addTask} from '../actions/taskActions';
import {updateTask} from '../actions/taskActions';

import '../css/common.css';

class AddTask extends Component {
  state = {
    id: "",
    name: "",
    description: "",
    duration: "",
    date: "",
    time: "",
    complete: false,
    nameTitle: "Create new task",
    nameButton: "Create"
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.getTask(id);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.task !== undefined) {
      const {id, name, description, duration, date, time, complete} = nextProps.task;
      this.setState({
        id,
        name,
        description,
        duration,
        date,
        time,
        complete,
        nameTitle: "Update new task",
        nameButton: "Update"
      });
    }
  }

  clearState() {
    this.setState({
      name: "",
      description: "",
      duration: "",
      date: "",
      time: "",
      complete: false
    });
  }

  onChange = (event) => this.setState({
    [event.target.name]: event.target.value
  });

  onSubmit = (event) => {
    event.preventDefault();

    const {id, name, description, duration, date, time, complete} = this.state;
    if (name !== "") {
      if (id === "") {
        this.props.addTask({
          name,
          description,
          duration,
          date,
          time,
          complete: false
        });
      } else {
        this.props.updateTask({
          id,
          name,
          description,
          duration,
          date,
          time,
          complete: false
        });
      }

      this.clearState();
    }
  };

  render() {
    const {
      name,
      description,
      duration,
      date,
      time,
      complete,
      nameTitle,
      nameButton
    } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">{nameTitle}</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="Enter name..."
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                className="form-control form-control-sm"
                placeholder="Enter description..."
                value={description}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="duration"
                className="form-control form-control-sm"
                placeholder="Enter duration (choice must be here)..."
                value={duration}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                className="form-control form-control-sm"
                placeholder="Enter date..."
                value={date}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="text"
                name="time"
                className="form-control form-control-sm"
                placeholder="Enter time..."
                value={time}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value={nameButton}
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    )
  }
}


AddTask.propTypes = {
  task: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  getTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.task.task
});

export default connect(mapStateToProps, {addTask, updateTask, getTask})(AddTask);