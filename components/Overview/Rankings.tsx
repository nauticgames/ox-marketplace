import { Grid } from "semantic-ui-react";
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
      width: 100%;
      font-size: 1.6em;
      min-height: 70px;
      font-weight: 700;
    }

    :nth-of-type(1) {
      h2 {
        color: #2c3bc3 !important;
      }
    }

    :nth-of-type(2) {
      h2 {
        color: #e98d38;
      }
    }

    :nth-of-type(3) {
      h2 {
        color: #e52d2d;
      }
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

const Rankings = () => {
  return (
    <StyledRankings>
      <div className="title">
        <h2>Rankings</h2>
        <img src="/assets/img/rankings-icon.svg" alt="Rankings icon" />
      </div>
      <Grid columns={3} textAlign="center">
        <Grid.Row style={{ padding: "30px 20px", marginTop: 20 }}>
          <Grid.Column>
            <h2>1v1 Silver</h2>
            <img src="/assets/img/unranked-icon.png" alt="Unranked Icon" />
            <h3>Unranked</h3>
            <h4>0 P</h4>
          </Grid.Column>
          <Grid.Column>
            <h2>5v5 Solo/Duo</h2>
            <img src="/assets/img/unranked-icon.png" alt="Unranked Icon" />
            <h3>Unranked</h3>
            <h4>0 P</h4>
          </Grid.Column>
          <Grid.Column>
            <h2>5v5 Teams</h2>
            <img src="/assets/img/unranked-icon.png" alt="Unranked Icon" />
            <h3>Unranked</h3>
            <h4>0 P</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledRankings>
  );
};

export default Rankings;
