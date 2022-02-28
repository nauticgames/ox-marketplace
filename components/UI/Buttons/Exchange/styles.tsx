import styled from "styled-components";

const StyledExchangeButton = styled.button`
  width: 100%;
  margin: auto auto 20px auto;
  color: #444444;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  font-size: 1em;
  font-weight: 500;

  img {
    margin-left: 5px;
  }

  @media (min-width: 768px) {
    font-size: 1em;
    margin: 0 20px 0 0;

    &:hover {
      cursor: pointer;
      color: #696969;
      transition: color 0.2s ease;
    }
  }
`;

export { StyledExchangeButton };
