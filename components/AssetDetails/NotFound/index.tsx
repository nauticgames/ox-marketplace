import Container from "../Container";
import { Icon } from "@iconify/react";
import { Grid } from "semantic-ui-react";

const AssetNotFound = () => {
  return (
    <Container>
      <Grid centered>
        <h2>
          Asset not found <Icon icon="carbon:warning-filled" color="#f03e3e" />
        </h2>
      </Grid>
    </Container>
  );
};

export default AssetNotFound;
