import { useRouter } from "next/router";
import { StyledExchangeButton } from "./styles";

const ExchangeButton = () => {
  const router = useRouter();

  return (
    <StyledExchangeButton onClick={() => router.push("/exchange")}>
      Exchange Luny
      <img src="/assets/img/exchange-luny.svg" alt="Exchange luny" />
    </StyledExchangeButton>
  );
};

export default ExchangeButton;
