import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`;

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .column {
    width: 100%;
  }

  .column:first-of-type {
    margin-top: 20px;
  }

  .column:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    border: none;

    .column:first-of-type {
      display: flex;
      margin-top: 0;
    }
  }
`;

export { StyledNav, StyledContainer };
