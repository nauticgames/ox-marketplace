import StadiumCard from "./StadiumCard";
import StadiumsPublicSaleData from "./StadiumsPublicSaleData";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding: 3%;
  height: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
`;

const StadiumList = () => {
  return (
    <StyledContainer>
      {StadiumsPublicSaleData.map((stadium) => (
        <StadiumCard
          key={stadium.name}
          img={stadium.img}
          name={stadium.name}
          price={stadium.price}
          nameBackground={stadium.nameBackground}
          usd={240.56}
        />
      ))}
    </StyledContainer>
  );
};

export default StadiumList;
