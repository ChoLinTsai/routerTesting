import React, { Component } from 'react';
import './done.scss';
import { Container } from 'react-materialize';


export default class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
     <div className="doneBlock">
      <Container>
        <i className="material-icons">report_problem</i>
        <h1>Done section is Working In Progress!</h1>
      </Container>
     </div> 
    )
  }
}