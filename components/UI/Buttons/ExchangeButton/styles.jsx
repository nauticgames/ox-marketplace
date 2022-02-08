import styled from "styled-components";

const StyledExchangeButton = styled.button`
  color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  font-size: 1em;
  font-weight: 500;

  @media (min-width: 768px) {
    margin-left: 40px;

    &:hover {
      cursor: pointer;
      color: #696969;
      transition: color 0.2s ease;
    }
  }

  img {
    margin-left: 5px;
  }
`;

export { StyledExchangeButton };
