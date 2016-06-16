import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../app/components/App';
import { Router, hashHistory } from 'react-router';
import routes from '../app/routes/routes';
import PlayList from '../app/components/playList';
import App_main from '../app/components/app_main';

const dest = document.getElementById('app');
// const store = createStore(todoApp);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , dest
// );

render(<Router history={hashHistory} routes={routes}/>, dest) ;
