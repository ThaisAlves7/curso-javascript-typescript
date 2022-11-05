import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrafo } from './styled';
import * as exampleAction from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleAction.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
