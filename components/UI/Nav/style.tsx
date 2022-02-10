import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 80px;

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
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .column-1 {
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .column-2 {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    border-bottom: none;
    margin-bottom: 0;

    .column-1 {
      margin-bottom: 0;
      border-bottom: none;
      display: flex;
    }
  }
`;

export { StyledNav, StyledContainer };
