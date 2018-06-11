import React, { Component } from 'react';
import './inprogress.scss';
import { Container } from 'react-materialize';


export default class Inprogress extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
     <div className="inprogressBlock">
      <Container>
        <i className="material-icons">report_problem</i>
        <h1>In Progress section is Working In Progress!</h1>
      </Container>
     </div> 
    )
  }
}