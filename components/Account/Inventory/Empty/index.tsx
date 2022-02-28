import { EmptyAssetsTitle, StyledContainer } from "../styles";

const EmptyAssets = ({ title }) => {
  return (
    <StyledContainer>
      <EmptyAssetsTitle>{title}</EmptyAssetsTitle>
    </StyledContainer>
  );
};

export default EmptyAssets;
