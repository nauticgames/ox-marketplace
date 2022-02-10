import styled from "styled-components";

const StyledLunyBalances = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h2 {
    font-weight: 600;
    font-size: 0.9em;
    color: #797979;
    display: flex;
    align-items: center;
    max-width: 50%;
    text-overflow: ellipsis;
    overflow: hidden;

    &:first-of-type {
      margin-right: 20px;
    }

    img {
      object-fit: contain;
      margin-right: 5px;
    }
  }

  @media (min-width: 768px) {
    h2 {
      max-width: initial;
    }
  }
`;

export { StyledLunyBalances };
