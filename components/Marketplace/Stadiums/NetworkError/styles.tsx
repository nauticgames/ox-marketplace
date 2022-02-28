import styled from "styled-components";

const StyledNetworkError = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;
    margin-right: 10px;
  }

  p {
    font-size: 1.2em;
    color: #f03e3e;
    font-weight: 500;
  }
`;

export default StyledNetworkError;
