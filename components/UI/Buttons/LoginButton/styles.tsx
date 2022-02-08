import styled from "styled-components";

const StyledLoginButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  min-width: 140px;
  height: 40px;
  background: #292929;
  box-shadow: 2px 2px 8px #98989826;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9em;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    &:hover {
      background: #575757;
      transition: background 0.2s ease;
    }
  }
`;

export { StyledLoginButton };
