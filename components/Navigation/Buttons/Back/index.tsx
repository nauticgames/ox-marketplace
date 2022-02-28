import { StyledBackButton } from "./styles";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

interface IBackButtonProps {
  path: string;
}

const Back = ({ path }: IBackButtonProps) => {
  const router = useRouter();

  const back = () => {
    path ? router.push(path) : router.back();
  };

  return (
    <StyledBackButton onClick={back}>
      <Icon icon="akar-icons:arrow-left" color="white" />
      Go back
    </StyledBackButton>
  );
};

export default Back;
