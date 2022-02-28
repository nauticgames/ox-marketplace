import { Grid } from "semantic-ui-react";
import StyledRankings from "./styles";

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
