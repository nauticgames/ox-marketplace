import styled from "styled-components";

const StyledAccountButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto 20px auto;
  height: 45px;
  background: #292929;
  box-shadow: 2px 2px 8px rgba(152, 152, 152, 0.15);
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9em;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin: 0;
    min-width: 150px;
    height: 40px;

    &:hover {
      background: #575757;
      transition: background 0.2s ease;
    }
  }
`;

export { StyledAccountButton };
