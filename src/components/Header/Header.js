import React, { Component } from 'react';
import './header.scss';
import Navigation from './NavBar/NavBar.js'

export default class Header extends Component {

  render() {
    return(
      <div className="headerBlock">

        <Navigation />
        
      </div>
    )
  } 
}