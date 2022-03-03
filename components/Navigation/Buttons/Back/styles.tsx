import styled from "styled-components";

const StyledBackButton = styled.button`
  width: 150px;
  max-width: 60vw;
  height: 40px;
  background: #b1b1b1;
  color: #fff;
  font-weight: 600;
  font-size: 0.8em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    &:hover {
      background: #a5a5a5;
      box-shadow: 0 0 5px 0 rgba(170, 170, 170, 0.3);
    }
  }
`;

export { StyledBackButton };
