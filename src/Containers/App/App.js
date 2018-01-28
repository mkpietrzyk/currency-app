import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import DashboardView from "../DashboardView";

export default () => {
  return (
        <Router>
          <div>
            <Route exact path="/" component={DashboardView}/>
          </div>
        </Router>
      )
}
