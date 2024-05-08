import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: auto; /* Altura ajustável */
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: 'Roboto';

  input {
    width: 90%; /* Largura ajustável */
    height: 65px; /* Altura fixa */
    border: none;
    padding: 0 10px;
    font-size: 24px;
    font-family: 'Roboto';
    box-sizing: border-box; /* Inclui o padding na largura */
  }
`;


 