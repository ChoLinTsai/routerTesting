import React, { Component } from 'react';
import './fileBlock.scss';


export default class FileBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="fileBlock contentBlock">

        <div className="fileTitle contentEleTitle">
          <i className="material-icons iconFile">
            insert_drive_file
          </i>
          <h6 className="contentEleH6">File</h6>
        </div>

        <div className="fileAdd">
          <i className="material-icons iconAdd">
            add_box
          </i>
        </div>

      </div>
    )
  }
}