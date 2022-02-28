import {
  Container,
  Grid,
  Icon,
  Pagination as SemanticPagination,
} from "semantic-ui-react";
import StyledPagination from "./styles";

const Pagination = ({ totalPages, activePage, onChange, disabled }) => {
  return (
    <StyledPagination>
      <Grid centered>
        <SemanticPagination
          totalPages={totalPages}
          activePage={activePage}
          disabled={disabled}
          onPageChange={(e, data) => onChange(data.activePage)}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true,
          }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
        ></SemanticPagination>
      </Grid>
    </StyledPagination>
  );
};

export default Pagination;
