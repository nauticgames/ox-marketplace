import styled from "styled-components";

const StyledLunyBalances = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-weight: 600;
    font-size: 1em;
    color: #797979;
    display: flex;
    align-items: center;

    &:first-of-type {
      margin-right: 20px;
    }

    img {
      object-fit: contain;
      margin-right: 5px;
    }
  }
`;

const LunyBalances = () => {
  return (
    <StyledLunyBalances>
      <h2>
        <img src="/assets/img/luny.png" alt="Lunary Icon" />0
      </h2>
      <h2>
        <img src="/assets/img/bluny.png" alt="Black Lunary Icon" />0
      </h2>
    </StyledLunyBalances>
  );
};

export default LunyBalances;
