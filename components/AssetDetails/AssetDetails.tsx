import styled from "styled-components";

const StyledAssetDetails = styled.main`
  position: relative;
  margin: 140px auto 50px auto;
  width: 90%;
  max-width: 90%;
  display: flex;
  padding: 80px 20px 20px 20px;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 12px 0 rgba(90, 90, 90, 0.2);
  border-radius: 10px;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

const AssetDetails = ({ children }) => {
  return <StyledAssetDetails>{children}</StyledAssetDetails>;
};

export default AssetDetails;
