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

const SearchResults = Loadable({
  loader: () => import(/* webpackChunkName: 'homepage' */ '../containers/searchResults'),
  loading: () => (
    <LoadingIndicator />
  ),
  modules: ['searchResults']
});

const PoiDetail = Loadable({
  loader: () => import(/* webpackChunkName: 'homepage' */ '../containers/poiDetails'),
  loading: () => (
    <LoadingIndicator />
  ),
  modules: ['poiDetails']
});

const Tutorial = Loadable({
  loader: () => import(/* webpackChunkName: 'homepage' */ '../containers/tutorial'),
  loading: () => (
    <LoadingIndicator />
  ),
  modules: ['tutorial']
});

const Passions = Loadable({
  loader: () => import(/* webpackChunkName: 'feature' */ '../containers/passions'),
  loading: () => (
    <LoadingIndicator />
  ),
  modules: ['passions']
});

const Reserve = Loadable({
  loader: () => import(/* webpackChunkName: 'feature' */ '../containers/reserve'),
  loading: () => (
    <LoadingIndicator />
  ),
  modules: ['reserve']
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/results" component={SearchResults} />
    <Route exact path="/welcome" component={Tutorial} />
    <Route
      exact
      path="/details/:poi"
      component={PoiDetail}
    />
    <Route exact path="/vos-passions" component={Passions} />
    <Route exact path="/reserve/:poi" component={Reserve} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
