import React, { Component } from 'react';
import './deadlineBlock.scss';
import { Input } from 'react-materialize';


export default class DeadlineBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="deadlineBlock contentBlock">

          <div className="deadlineTitle contentEleTitle">
            <i className="material-icons iconDate">
              date_range
            </i>
            <h6 className="contentEleH6">Deadline</h6>
          </div>

          <div className="deadlineDateTime">
            <div className="inputDateBlock">
              <Input s={6} placeholder="yyyy/mm/dd"
                className="inputDate"
                label="Enter a Date" />
            </div>

            <div className="inputTimeBlock">
              <Input s={6} placeholder="hh:mm"
                  className="inputTime"
                  label="Enter a Time/24hrs" />
            </div>
          </div>

      </div>
    )
  }
}