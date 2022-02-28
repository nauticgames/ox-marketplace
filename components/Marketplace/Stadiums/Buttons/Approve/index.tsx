import React from "react";
import { Loader } from "semantic-ui-react";
import StyledApproveButton from "./styles";

const ApproveButton = ({ approveFunction, fetching }) => {
  return (
    <StyledApproveButton disabled={fetching} onClick={approveFunction}>
      {fetching ? (
        <>
          <Loader active inline size="small" />
        </>
      ) : (
        <>Approve WBNB</>
      )}
    </StyledApproveButton>
  );
};

export default ApproveButton;
