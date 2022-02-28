import styled from "styled-components";

const StyledAssetDetails = styled.main`
  position: relative;
  margin: 20px auto 60px auto;
  width: 90%;
  max-width: 90%;
  display: flex;
  padding: 85px 20px 30px 20px;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 12px 0 rgba(90, 90, 90, 0.2);
  border-radius: 5px;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 700px;
  }

  @media (min-width: 1200px) {
    width: 900px;
  }
`;

export default StyledAssetDetails;
