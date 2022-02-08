import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledHomeButton } from "./styles";

const HomeButton = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/stadiums");
  };

  return (
    <StyledHomeButton onClick={goHome}>
      <Icon icon="ant-design:home-filled" color="white" />
    </StyledHomeButton>
  );
};

export default HomeButton;
