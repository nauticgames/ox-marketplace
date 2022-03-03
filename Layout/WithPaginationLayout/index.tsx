import Pagination from "../../components/Pagination";
import { IPaginationLayoutProps } from "../../types/Layout";

const WithPaginationLayout = ({
  children,
  totalPages,
  onChange,
  query,
}: IPaginationLayoutProps) => {
  return (
    <>
      {children}
      <Pagination
        activePage={typeof query.page !== "undefined" ? query.page : 1}
        onChange={onChange}
        totalPages={totalPages}
        disabled={totalPages === 1}
      />
    </>
  );
};

export default WithPaginationLayout;
