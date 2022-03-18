import Pagination from "../../components/Pagination";
import { IPaginationLayoutProps } from "../../types/Layout";

const WithPaginationLayout = ({
  children,
  totalPages,
  onChange,
  page,
}: IPaginationLayoutProps) => {
  return (
    <>
      {children}
      <Pagination
        activePage={page}
        onChange={onChange}
        totalPages={totalPages}
        disabled={totalPages === 1}
      />
    </>
  );
};

export default WithPaginationLayout;
