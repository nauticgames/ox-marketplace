import { Loader } from "semantic-ui-react";
import { StyledContainer } from "../styles";

const LoadingAssets = () => {
  return (
    <StyledContainer>
      <Loader active inline size="big" />
    </StyledContainer>
  );
};

export default LoadingAssets;
