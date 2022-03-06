import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledAccountButton } from "./styles";

const AccountButton = () => {
  return (
    <Link href="/account/overview">
      <StyledAccountButton>
        My account <Icon icon="ic:sharp-account-circle" />
      </StyledAccountButton>
    </Link>
  );
};

export default AccountButton;
