import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  margin: 40px auto;

  .menu .item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #383838 !important;
  }

  .menu .active.item {
    background-color: #ed2e2e !important;
    color: #fff !important;
    font-weight: 600;
  }

  .pagination {
    padding: 0;

    a {
      i {
        color: #ed2e2e;
      }

      &:hover {
        i {
          color: #ee4545 !important;
        }
      }
    }
  }
`;

export default StyledPagination;
