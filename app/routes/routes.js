import { Route, IndexRoute } from 'react-router';
import React from 'react';
import PlayList from '../components/playList';
import App_main from '../components/app_main';
import App from '../components/App';

const routes = (
  <Route path="/" component={App_main}>
    <IndexRoute component={App} />
    <Route path="/playlist" component={PlayList} />
  </Route>
)

export default routes;
