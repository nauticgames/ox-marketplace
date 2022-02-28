import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledAccountButton } from "./styles";

const AccountButton = () => {
  const router = useRouter();

  return (
    <StyledAccountButton onClick={() => router.push("/account/overview")}>
      My account <Icon icon="ic:sharp-account-circle" />
    </StyledAccountButton>
  );
};

export default AccountButton;
