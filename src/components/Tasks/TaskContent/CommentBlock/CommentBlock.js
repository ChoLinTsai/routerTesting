import React, { Component } from 'react';
import './commentBlock.scss';
import { Row, Input } from 'react-materialize';

export default class CommentBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="commentBlock contentBlock">
        <div className="commentTitle contentEleTitle">
          <i className="material-icons iconComment">
            comment
          </i>
          <h6 className="contentEleH6">Comment</h6>
        </div>

        <div className="commentArea">
          <Row>
            <Input type='textarea' className="textArea"
              placeholder="//Write some comments"/>
          </Row>
        </div>
      </div>
    )
  }
}