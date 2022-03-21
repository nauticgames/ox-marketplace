import { StyledBackButton } from "./styles";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

const Back = () => {
  const router = useRouter();

  const back = () => {
    router.back();
  };

  return (
    <StyledBackButton onClick={back}>
      <Icon icon="akar-icons:arrow-left" color="white" />
      Go back
    </StyledBackButton>
  );
};

export default Back;
