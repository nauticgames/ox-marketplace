import { Icon } from "@iconify/react";
import Link from "next/link";
import { StyledAccountButton } from "./styles";

const AccountButton = () => {
  return (
    <Link href="/account/overview" passHref shallow={true}>
      <StyledAccountButton>
        My account <Icon icon="ic:sharp-account-circle" />
      </StyledAccountButton>
    </Link>
  );
};

export default AccountButton;
