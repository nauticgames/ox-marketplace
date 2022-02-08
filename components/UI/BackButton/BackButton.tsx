import { StyledBackButton } from "./styles";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

interface BackButtonProps {
  path: string;
}

const BackButton = ({ path }: BackButtonProps) => {
  const router = useRouter();

  const goBack = () => {
    router.push(path);
  };

  return (
    <StyledBackButton onClick={goBack}>
      <Icon icon="akar-icons:arrow-left" color="white" />
      Go back
    </StyledBackButton>
  );
};

export default BackButton;
