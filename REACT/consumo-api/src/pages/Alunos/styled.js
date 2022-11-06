import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;

    /* border: 1px solid black; */
  }
  .aluno-container + div {
    border-top: 1px solid #eee;
  }

  span {
    display: flex;
    align-items: center;
    text-align: left;
    padding: auto;
  }

  .name {
    width: 100px;
    height: 50px;
    text-align: left;

    /* border: 1px solid red; */
  }

  .email {
    width: 200px;
    height: 50px;

    /* border: 1px solid purple; */
  }
`;

export const ProfilePicture = styled.div`
  width: 50px;
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    /* align-items: center; */
    /* margin-left: 50px; */
  }
`;
