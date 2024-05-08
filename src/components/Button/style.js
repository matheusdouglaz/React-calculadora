import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 3% 5%; /* Ajuste do padding responsivo */
  border: none;
  background-color: #000000; /* Cor verde */
  color: white;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #CACACA; /* Cor verde mais escura */
    transform: scale(1.1); /* Aumenta um pouco o tamanho ao passar o mouse */
  }

  &:active {
    background-color: #398439; /* Cor verde mais escura quando pressionado */
    transform: scale(0.95); /* Reduz um pouco o tamanho ao clicar */
  }
`;
