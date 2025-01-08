import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperButtons = styled.button`
  background: transparent;
  color: teal;
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;

  @media (max-width: 767px) {
    .buttons__button {
      flex-basis: 100%;
      margin: 10px;
    }
  }

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: hsl(0, 0%, 80%);
  }
`;
