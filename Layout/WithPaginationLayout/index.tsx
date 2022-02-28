import Pagination from "../../components/Pagination";

const WithPaginationLayout = ({ children, totalPages, onChange, query }) => {
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
