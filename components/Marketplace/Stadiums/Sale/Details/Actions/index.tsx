import ActionsLayout from "../../../../../../Layout/ActionsLayout";
import { IPurchaseActionsProps } from "../../../../../../types/Components";
import ApproveButton from "../../../Buttons/Approve";
import NotAuthenticatedButton from "../../../Buttons/NotAuthenticated";
import PurchaseButton from "../../../Buttons/Purchase";
import NetworkError from "../../../NetworkError";
import Loading from "../Loading";

const PurchaseActions = ({
  isAuthenticated,
  allowance,
  error,
  price,
  purchase,
  approve,
  fetching,
}: IPurchaseActionsProps) => {
  if (!isAuthenticated) {
    return (
      <ActionsLayout>
        <NotAuthenticatedButton />
      </ActionsLayout>
    );
  }

  if (fetching.allowance) {
    return (
      <ActionsLayout>
        <Loading active={fetching.allowance} />
      </ActionsLayout>
    );
  }

  if (error) {
    return (
      <ActionsLayout>
        <NetworkError />
      </ActionsLayout>
    );
  }

  if (allowance.wbnb < price) {
    return (
      <ActionsLayout>
        <ApproveButton fetching={fetching.approve} approveFunction={approve} />
      </ActionsLayout>
    );
  }

  return (
    <ActionsLayout>
      <PurchaseButton purchase={purchase} fetching={fetching.purchase} />
    </ActionsLayout>
  );
};

export default PurchaseActions;
