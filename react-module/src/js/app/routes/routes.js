import React from 'react';
import { Route } from 'react-router-dom';
import FirstComponent from "../components"

const routes = [
  <Route
      exact
      component={FirstComponent}
      path={'/'}
  />
];

export default routes;
