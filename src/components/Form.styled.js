import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 6px solid;
  border-radius: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
   padding: 1.5rem;
   border: 1px solid;
   border-radius: 0.5rem;
   font-size: 1rem;

   @media (min-width: 1024px) {
    width: 10%;
    min-width: 150px;
  }
`;

export const InputImg = styled.input`
   padding: 1.3rem;
   border: 1px solid;
   border-radius: 0.5rem;
   font-size: 1rem;

   @media (min-width: 1024px) {
    width: 10%;
    min-width: 150px;
  }
`;

export const TextArea = styled.textarea`
   padding: 1.5rem;
   border: 1px solid;
   border-radius: 0.5rem;
   font-size: 1rem;
`;

export const SubmitButton = styled.button`
   background-color: #198754;
   color: #ffff;
   border-radius: 0.5rem;
   font-size: 1rem;
   padding: 0.9rem;

   &:hover {
     background-color: #28d128;
   }
`;

export const AlertCarregando = styled.p`
  margin: 1rem;
  font-size: 2rem;
`;