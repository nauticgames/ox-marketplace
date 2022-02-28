import styled from "styled-components";

const StyledLogoutButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  height: 45px;
  background: #f33737;
  box-shadow: 2px 2px 8px #98989826;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    height: 40px;

    &:hover {
      background: #e04040;
      transition: background 0.2s ease;
    }
  }
`;

export { StyledLogoutButton };
