import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoutes from './MyRoutes';

import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Switch>
      <MyRoutes exact path="/" component={Alunos} isClosed={false} />
      <MyRoutes exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoutes exact path="/aluno/" component={Aluno} isClosed />
      <MyRoutes exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoutes exact path="/login/" component={Login} isClosed />
      <MyRoutes exact path="/register/" component={Register} isClosed />

      <MyRoutes path="*" component={Page404} />
    </Switch>
  );
}
