import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// Import main model page
import LoadingIndicator from '../components/LoadingIndicator';

// Import containers
import NotFoundPage from '../containers/notFound';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: 'homepage' */ '../containers/homepage'),
  loading: () => (
    <LoadingIndicator />
  ),
  modules: ['homepage']
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
