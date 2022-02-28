import styled from "styled-components";

const StyledAccountOverview = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(83, 83, 83, 0.1);
  border-left: 5px solid #2f57f7;

  .title {
    width: 100%;
    margin-bottom: 20px;

    h2 {
      font-size: 2em;
      font-weight: 600;
      color: #828282;
    }
  }

  .metamask-connected {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-size: 1.1em;
      font-weight: 600;
      color: #828282;
    }
    svg {
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }
  }

  .account-number {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2,
    p {
      margin-right: 5px;
    }

    h2 {
      font-size: 1.2em;
      color: #828282;
      font-weight: 600;
    }

    p {
      font-size: 1.1em;
      color: #a3a3a3;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;

export default StyledAccountOverview;
