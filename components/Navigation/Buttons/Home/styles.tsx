import styled from "styled-components";

const StyledHomeButton = styled.button`
  width: 40px;
  height: 40px;
  background: #b1b1b1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    &:hover {
      background: #a5a5a5;
      box-shadow: 0 0 5px 0 rgba(170, 170, 170, 0.3);
    }
  }
`;

export { StyledHomeButton };
