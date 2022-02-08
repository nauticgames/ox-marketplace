import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledAccountButton } from "./styles";

const AccountButton = () => {
  const { replace } = useRouter();

  const goToAccount = () => {
    replace({ pathname: "/account/overview" });
  };

  return (
    <StyledAccountButton onClick={goToAccount}>
      My account <Icon icon="ic:sharp-account-circle" />
    </StyledAccountButton>
  );
};

export default AccountButton;
