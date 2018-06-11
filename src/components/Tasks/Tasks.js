import React, { Component } from 'react';
import './tasks.scss';
import { 
  Container,
  Collapsible, } from 'react-materialize';

import TaskContent from './TaskContent/TaskContent.js';
import TaskContentFooter from './TaskContentFooter/TaskContentFooter.js';
import TaskLists from './TaskLists/TaskLists.js';

export default class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  
  render() {
    return (

      <div className="sectionTasks">
        <Container>

          <div className="tasksBlock">
            <Collapsible>
              <li>
                <div className="collapsible-header">
                  <div className="checkboxWrapper">

                    <div className="row">
                      <div className="col">
                        <input id="taskBlockCheckBox" type="checkbox"/>
                        <label htmlFor="taskBlockCheckBox"></label>
                      </div>
                    </div>

                  </div>

                  <div className="taskTitleWrapper">
                    <div className="row">
                      <form action="#" className="col s12">
                        <div className="row">
                          <div className="input-field col s12">
                            <input id="last_name"
                              type="text" className="validate" />
                            <label htmlFor="last_name">Task Name</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="taskIconWrapper">
                    <div className="row">
                      <i className="material-icons iconStar">
                        star_border
                      </i>
                    </div>
                    
                    <i className="material-icons iconEdit">create</i>
                  </div>
                  
                </div>

                <div className="collapsible-body">

                  <TaskContent />
                  <TaskContentFooter />

                </div>

              </li>

            </Collapsible>

            <TaskLists />

          </div>

          

        </Container>
      </div>
    )
  }
}