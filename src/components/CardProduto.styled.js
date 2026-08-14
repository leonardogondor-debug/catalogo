import styled from "styled-components";

export const GridConteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1024px) {
  grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  border: 6px solid;
  border-radius: 1rem;
  margin: 0.5rem; 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Imagem = styled.img`
   width: 100%;
   height: 200px;
   object-fit: cover;
   border-radius: 1rem;
   display: block;
   text-align: center;
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
  width: 100%;
  height: 3rem;
  align-self: center;
  

  &:hover {
  opacity: 0.8;
  }

  /* para tela celular tablet */
  @media (min-width: 1024px) {
     width: 70%;
  }
`; 