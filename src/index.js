import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import RoutesConfig from './routes-config';
import store from './store';

import './index.scss';

const App = () => (
  <CookiesProvider>
    <React.StrictMode>
      <Provider store={store}>
        <RoutesConfig />
      </Provider>
    </React.StrictMode>
  </CookiesProvider>
);

render(<App />, document.getElementById('app'));
