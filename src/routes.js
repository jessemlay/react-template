import React from 'react';
import { Route } from 'react-router-dom';
import Settings from './containers/Settings';
import CustomRouteLayout from './customRouteLayout';
import CustomRouteNoLayout from './customRouteNoLayout';
//import Lock from './containers/Lock';

export default [
   <Route exact path="/settings" component={Settings} />,
   <Route exact path="/custom" component={CustomRouteNoLayout} noLayout />,
   <Route exact path="/custom2" component={CustomRouteLayout} />
   //<Route exact path="/lock" component={Lock} />
];
