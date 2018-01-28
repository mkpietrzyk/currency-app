import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import DashboardView from "../DashboardView";

import styles from './GlobalStyles/GlobalStyles.css'

export default () => {
  return (
        <Router>
          <div className='app'>
            <Route exact path="/" component={DashboardView}/>
          </div>
        </Router>
      )
}
