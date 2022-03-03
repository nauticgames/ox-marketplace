import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { StyledHomeButton } from "./styles";

const Home = () => {
  const router = useRouter();

  return (
    <StyledHomeButton onClick={() => router.push("/stadiums")}>
      <Icon icon="ant-design:home-filled" color="white" />
    </StyledHomeButton>
  );
};

export default Home;
