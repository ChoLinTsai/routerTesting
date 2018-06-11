import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import { BrowserRouter as Router,
          Route,
          Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import Inprogress from './components/Inprogress/Inprogress';
import Done from './components/Done/Done';
import Error from './components/Error/Error';


class Index extends Component {

  render() {
    return (
      <Router className="index" basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Tasks} exact />
            <Route path="/inprogress"
              component={Inprogress} />
            <Route path="/done" component={Done} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('index')
)
