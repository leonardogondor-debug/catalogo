import styled from "styled-components";

export const Card = styled.div`
  border: 10px solid;
  border-radius: 2rem;
  margin: 0.5rem; 
  padding: 1rem;
`;

export const NomeProduto = styled.h2`
  font-family: Arial, sans-serif;
`;

export const Valor = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
`;

export const Descricao = styled.p`
  font-family: sans-serif;
  font-size: 1rem;
`;

export const Botao = styled.button`
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  border: 2px solid;
  border-radius: 20px;
  font-family: sans-serif;
  font-size: 1rem;
  width: 50%;
  height: 3rem;

  &:hover {
  opacity: 0.8;
  }

  /* para tela celular tablet */
  @media (max-width: 768px;) {
     width: 100%;
  }
`; 