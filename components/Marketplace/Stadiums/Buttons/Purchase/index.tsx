import { Icon } from "@iconify/react";
import React from "react";
import { Loader } from "semantic-ui-react";
import StyledPurchaseButton from "./styles";

const PurchaseButton = ({ purchase, fetching }) => {
  return (
    <StyledPurchaseButton disabled={fetching} onClick={purchase}>
      {fetching ? (
        <>
          <Loader active inline size="small" />
        </>
      ) : (
        <>
          Buy <Icon icon="icons8:buy" color="#fff" />
        </>
      )}
    </StyledPurchaseButton>
  );
};

export default PurchaseButton;
