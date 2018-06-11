import React, { Component } from 'react';
import './taskContentFooter.scss';

export default class TaskContentFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="taskContentFooter">
      
        <div className="taskCancel taskOptions">
          <i className="material-icons">clear</i>
          <p>Cancel</p>
        </div>

        <div className="taskAdd taskOptions">
          <i className="material-icons">add</i>
          <p>Add Task</p>
        </div>

      </div>
    )
  }
}