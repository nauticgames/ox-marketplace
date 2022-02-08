import Image from "next/image";
import { Container, Grid } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Title, Details, Price } from "../detailsStyles";
import { StyledOwnerAddress } from "./styles";
import useUsdPrice from "../../../hooks/useUsdPrice";
import priceWithCommas from "../../../utils/priceWithCommas";
import StadiumsData from "../StadiumsData";

interface StadiumDetailsProps {
  details: {
    itemId: number;
    external_url: string;
    description: string;
    owner: string;
    image: string;
    name: string;
    attributes: [
      {
        trait_type: string;
        value: string;
      }
    ];
  };
  price?: number;
}

const StadiumDetails = ({ details, price }: StadiumDetailsProps) => {
  const { owner, image, name, attributes } = details;

  const [formattedPrice, setFormattedPrice] = useState(null);

  const { usdPrice } = useUsdPrice();

  useEffect(() => {
    const unsubscribe = () => {
      if (usdPrice && price) {
        setFormattedPrice(priceWithCommas((usdPrice * price).toFixed(2)));
      }
    };

    return unsubscribe;
  }, [usdPrice]);

  const data = StadiumsData.find((type) => type.name === attributes[0].value);

  return (
    <Container>
      <Title titleBackground={data.titleBackground}>
        <h1>{name}</h1>
      </Title>

      <Grid>
        <Grid.Column computer={9} tablet={8} mobile={16}>
          <Image
            src={image}
            alt={name}
            width={1470}
            height={1366}
            layout="responsive"
            objectFit="contain"
            quality={100}
            priority
          />
        </Grid.Column>
        <Grid.Column computer={7} tablet={8} mobile={16}>
          {price &&
            formattedPrice(
              <Price>
                <p>{price} WBNB</p>
                <span>${formattedPrice}</span>
              </Price>
            )}
          <Details>
            <div>
              <Icon icon="mdi:hand-coin" color="#CACACA" /> <p>Fee:</p>
              <strong>{data.fee}%</strong>
            </div>
            <div>
              <Icon icon="bi:people-fill" color="#CACACA" />{" "}
              <p>Max participants in C.T:</p>
              <strong>{data.maxParticipants}</strong>
            </div>
          </Details>
          <StyledOwnerAddress>
            <Icon icon="fa-solid:user-tag" color="#CACACA" />
            <h2>Owner:</h2>
            <span>{owner}</span>
          </StyledOwnerAddress>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default StadiumDetails;
