import styled from "styled-components";

const StyledApproveButton = styled.button`
  min-width: 230px;
  margin: 0 auto;
  width: 100%;
  height: 45px;
  background-color: #2e6bf0;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
      background: #4c82f8;
      transition: background-color 0.2s ease;
    }
  }
`;

export default StyledApproveButton;
