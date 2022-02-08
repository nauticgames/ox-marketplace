import styled from "styled-components";

const StyledOwnerAddress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  h2 {
    font-size: 1.3em;
    color: #cacaca;
    font-weight: 500;
  }

  span {
    margin-left: 5px;
    color: #9c9c9c;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  .notfound__message {
    margin-top: 300px !important;
    color: rgb(180, 180, 180);
    font-weight: 600;
    font-size: 2em;
  }
`;

export { StyledOwnerAddress, StyledContainer };
