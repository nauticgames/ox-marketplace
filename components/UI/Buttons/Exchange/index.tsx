import Link from "next/link";
import { StyledExchangeButton } from "./styles";

const ExchangeButton = () => {
  return (
    <Link href="/exchange">
      <StyledExchangeButton>
        Exchange Luny
        <img src="/assets/img/exchange-luny.svg" alt="Exchange luny" />
      </StyledExchangeButton>
    </Link>
  );
};

export default ExchangeButton;
