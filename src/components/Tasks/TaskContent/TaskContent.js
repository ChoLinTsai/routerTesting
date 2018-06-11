import React, { Component } from 'react';
import './taskContent.scss';
import { Input } from 'react-materialize';
import DeadlineBlock from './DeadlindeBlock/DeadlineBlock.js';
import FileBlock from './FileBlock/FileBlock.js';
import CommentBlock from './CommentBlock/CommentBlock.js';


export default class TaskContent extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="taskContent">

        <DeadlineBlock />
        <FileBlock />
        <CommentBlock />
        
    </div>
    )
  }
}