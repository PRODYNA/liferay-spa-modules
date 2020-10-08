import React from 'react';
import { Router, Switch } from 'react-router-dom';
import customHistory from '../common/history';
import routes from './routes';

export const ROOT = Liferay.ThemeDisplay.getLayoutRelativeURL();

export default () => (
  <Router history={customHistory} basepath={ROOT}>
    <div>
      <Switch>
        {routes.map(route => route)}
      </Switch>
    </div>
  </Router>
);
