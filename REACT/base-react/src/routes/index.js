import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoutes from './MyRoutes';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoutes exact path="/" component={Login} />

      <MyRoutes path="*" component={Page404} />
    </Switch>
  );
}
