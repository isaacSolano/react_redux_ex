import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';

import App from 'components/App/Index';

import rootReducer from 'reducers/index';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

ReactDOM.render(
  <Provider 
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);