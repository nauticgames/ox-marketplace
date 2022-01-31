import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const StyledAccountButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  min-width: 140px;
  height: 40px;
  background: #292929;
  box-shadow: 2px 2px 8px #98989826;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.9em;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-left: 40px;

    &:hover {
      background: #575757;
      transition: background 0.2s ease;
    }
  }
`;

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
