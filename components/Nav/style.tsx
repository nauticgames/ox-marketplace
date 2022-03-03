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
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  .column-1,
  .column-2 {
    width: 100%;
  }

  .column-1 {
    margin-top: 20px;
  }

  .column-2 {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    border: none;

    .column-1 {
      display: flex;
      margin-top: 0;
    }
  }
`;

export { StyledNav, StyledContainer };
