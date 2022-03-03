import styled from "styled-components";

const StyledPagination = styled.div`
  width: 100%;
  margin: 40px auto;

  .grid {
    overflow-x: auto;
    width: 100%;
    margin: auto;
  }

  .ui.pagination.menu {
    width: 100%;
    border: none;
  }

  .menu .item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #383838 !important;
  }

  .ui.menu .item.disabled {
    opacity: 0.3;
  }

  .menu .active.item,
  .ui.menu .item.active.disabled:hover {
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

  @media (min-width: 768px) {
    .ui.pagination.menu {
      width: initial;
      justify-content: center;
      border: 1px solid rgba(34, 36, 38, 0.15);
    }
  }
`;

export default StyledPagination;
