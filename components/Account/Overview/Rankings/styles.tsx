import styled from "styled-components";

const StyledRankings = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(83, 83, 83, 0.1);

  .title {
    width: 100%;
    height: 60px;
    background-color: #ed2e2e;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.1em;
      font-weight: 500;
      color: #fff;
      margin-right: 10px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2,
    h3,
    h4 {
      font-family: "Baloo 2", sans-serif;
    }

    h2 {
      color: #3f3f3f;
      width: 100%;
      font-size: 1.5em;
      min-height: 70px;
      font-weight: 800;
    }

    img {
      margin: auto;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.3em;
      color: #898989;
      font-weight: 600;
      margin-bottom: 5px;
    }

    h4 {
      margin-top: 0;
      font-weight: 600;
      color: #bcbcbc;
      font-size: 1.1em;
    }
  }
`;

export default StyledRankings;
