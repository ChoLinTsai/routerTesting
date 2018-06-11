import React, { Component } from 'react';
import './taskLists.scss'


export default class TaskLists extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {

    const taskItem1 = {
      id: 1,
      taskName: 'Buy coffee beans',
      taskDate: '2018/06/10',
    }

    const taskItem2 = {
      id: 2,
      taskName: 'Make a latte',
      taskDate: '2018/06/10',
    }

    const taskItem3 = {
      id: 3,
      taskName: 'Enjoy latte',
      taskDate: '2018/06/10',
    }

    const taskItem4 = {
      id: 4,
      taskName: 'F2E todo trainig',
      taskDate: '2018/06/11',
    }

    const taskItems = [taskItem1, taskItem2, taskItem3, taskItem4];

    const taskLists = taskItems.map( item => {
      return <div key={item.id} className="taskItem">
                <div className="row">
                  <div className="col">
                    <input type="checkbox"
                      id={`taskItemCheckbox_${item.id}`}
                      className="checkboxes"/>
                    <label htmlFor={`taskItemCheckbox_${item.id}`}></label>
                  </div>          
                </div>

                <div className="taskName">
                  {item.taskName}
                </div>

                <div className="taskItemIcons">
                  <i className="material-icons itemIconStar">star</i>
                  <i className="material-icons itemIconEdit">create</i>
                </div>

                <div className="taskItemInfo">
                  <div className="taskDate">
                    <i className="material-icons itemIconDate">date_range</i>
                    <p>{item.taskDate}</p>
                  </div>

                  <div className="taskDetails">
                    <i className="material-icons itemIconFile">
                      insert_drive_file
                    </i>
                    <i className="material-icons itemIconComment">
                      comment
                    </i>
                  </div>
                </div>
            </div>
    })

    return (

      <div className="taskListBlock">

        {taskLists}

      </div>
    )
  }
}