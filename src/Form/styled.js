import styled from "styled-components";

export const Application = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    .form {
      grid-template-columns: 1fr;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background: hsl(180, 100%, 25%);
  color: white;
  border: none;
  transition: 0.3s;

  &:hover {
    background: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background: hsl(180, 100%, 35%);
  }
`;
