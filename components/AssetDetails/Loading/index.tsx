import { Grid, Loader } from "semantic-ui-react";
import Container from "../Container";

const LoadingAsset = () => {
  return (
    <Container>
      <Grid centered>
        <Loader inline active size="big" />
      </Grid>
    </Container>
  );
};

export default LoadingAsset;
