import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

const StyledLogoutButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  height: 40px;
  background: #f33737;
  box-shadow: 2px 2px 8px #98989826;
  border-radius: 5px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    margin-left: 10px;

    &:hover {
      background: #e04040;
      transition: background 0.2s ease;
    }
  }
`;

const LogoutButton = () => {
  const { logout } = useMoralis();
  const router = useRouter();

  const logoutFunction = () => {
    logout();
    router.push({ pathname: "/stadiums" });
  };

  return (
    <StyledLogoutButton onClick={logoutFunction}>
      <Icon icon="fe:logout" color="white" />
    </StyledLogoutButton>
  );
};

export default LogoutButton;
