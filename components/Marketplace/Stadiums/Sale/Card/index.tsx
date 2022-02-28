import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import Remaining from "../Remaining";
import { StyledPrice, StyledTitle } from "./styles";
import {
  Card as SemanticCard,
  CardContent,
  CardHeader,
} from "semantic-ui-react";

const Card = ({ stadium, usdPrice }) => {
  const { label, path, img, price, stadiumColor, type } = stadium;

  const router = useRouter();

  const showDetails = () => {
    router.push({
      pathname: `/stadiums/sale${path}`,
    });
  };

  return (
    <SemanticCard onClick={showDetails} fluid>
      <CardHeader content>
        <StyledTitle stadiumColor={stadiumColor}>
          <h2 className="label">{label}</h2>
          <Remaining type={type} />
        </StyledTitle>
      </CardHeader>
      <CardContent style={{ borderTop: 0 }}>
        <Image
          src={img}
          alt={label}
          width={1366}
          height={1207}
          layout="responsive"
          objectFit="contain"
          quality={100}
          priority
        />
        <StyledPrice>
          <Icon
            icon="simple-icons:binance"
            color="#f3ba2f"
            className="price__token-icon"
          />
          <p className="price__wbnb">{price}</p>
          <span className="price__usd">${usdPrice ? usdPrice : "-"}</span>
        </StyledPrice>
      </CardContent>
    </SemanticCard>
  );
};

export default Card;
