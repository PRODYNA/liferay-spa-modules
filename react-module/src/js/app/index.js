import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import Router from './routes/router';
import {render} from "react-dom";
import store from './common/store';

const rootEl = document.getElementById("react-app");

render(
  <AppContainer>
    <Provider store={ store } >
      <Router />
    </Provider>
  </AppContainer>,
  rootEl
);

//TODO: Check why does it stop
if (module.hot) {
  module.hot.accept('./routes/router', () => {
    const NextRouter = require('./routes/router').default;

    render(
      <AppContainer>
        <Provider store={ store } >
          <NextRouter />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}
