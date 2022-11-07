import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { isEmail, isInt, isFloat } from 'validator';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyle';
import { Form, ProfilePicture, Title } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match, history }) {
  const dispatch = useDispatch();

  /*
    Verifica se possui id caso tenha:
      °Editar aluno
    Senão:
      °Criar novo Aluno
  */
  const id = get(match, 'params.id', '');

  // Obter valores do novo cadastro de Aluno
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setFoto(Foto);

        // Obter as informações para alterar do Aluno
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history.push('/');
      }
    }

    getData();
  }, [id, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length >= 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length >= 255) {
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      formErrors = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade inválida');
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('Peso inválido');
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura inválida');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        // Editando
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });

        toast.success('Aluno(a) editado com sucesso');
      } else {
        // Criando
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });

        toast.success('Aluno(a) criado com sucesso');
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.registerFailure());
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Editar aluno' : 'Novo Aluno'}</Title>

      {id && (
        <ProfilePicture>
          {foto ? (
            <img crossOrigin="" src={foto} alt={nome} />
          ) : (
            <FaUserCircle size={180} />
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}

      <Form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="nome">
          Nome:
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Insira nome do Aluno"
          />
        </label>

        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Insira sobrenome do Aluno"
          />
        </label>

        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira email do Aluno"
          />
        </label>

        <label htmlFor="idade">
          Idade:
          <input
            id="idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            placeholder="Insira idade do Aluno"
          />
        </label>

        <label htmlFor="peso">
          Peso:
          <input
            id="peso"
            type="text"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Insira peso do Aluno"
          />
        </label>

        <label htmlFor="altura">
          Altura:
          <input
            id="altura"
            type="text"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Insira altura do Aluno"
          />
        </label>

        <button type="submit">
          {id ? 'Salvar Alterações' : 'Cadastrar Aluno'}
        </button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
  history: PropTypes.shape([]).isRequired,
};
