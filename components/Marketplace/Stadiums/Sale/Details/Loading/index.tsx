import { Container, Grid, Loader } from "semantic-ui-react";

const Loading = ({ active }) => {
  return (
    <Container style={{ marginBottom: 20 }}>
      <Grid centered>
        <Loader inline size="medium" active={active} />
      </Grid>
    </Container>
  );
};

export default Loading;
