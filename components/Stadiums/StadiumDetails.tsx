import { Container, Grid } from "semantic-ui-react";
import { Title, Details, Price } from "./StadiumPublicSaleDetails";
import stadiumTitleBackgrounds from "../../utils/stadiumTitleBackgrounds";
import Image from "next/image";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useTokenPrice } from "react-moralis";
import { useEffect, useState } from "react";

const StyledOwnerAddress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;
    margin-right: 5px;
  }

  h2 {
    font-size: 1.3em;
    color: #cacaca;
    font-weight: 500;
  }

  span {
    margin-left: 5px;
    color: #9c9c9c;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface StadiumDetailsProps {
  stadium: any;
  price?: number | undefined;
}

const StadiumDetails = ({ stadium, price }: StadiumDetailsProps) => {
  const { name, token_id, owner_of } = stadium;

  const parseMetadata = JSON.parse(stadium.metadata);

  const [formattedPrice, setFormattedPrice] = useState(null);

  const { data: formattedData } = useTokenPrice({
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chain: "bsc",
  });

  useEffect(() => {
    const unsubscribe = () => {
      if (formattedData && price) {
        setFormattedPrice(
          numberWithCommas((formattedData.usdPrice * price).toFixed(2))
        );
      }
    };

    return unsubscribe;
  }, [formattedData]);

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const query = parseMetadata.attributes[0].value;

  const { background } = stadiumTitleBackgrounds.find((obj) =>
    obj.name.includes(query)
  );

  const { fee, maxParticipants } = StadiumProperties.find((type) =>
    type.name.includes(query)
  );

  return (
    <Container>
      <Title nameBackground={background}>
        <h1>{parseMetadata.name}</h1>
      </Title>

      <Grid>
        <Grid.Column computer={9} tablet={8} mobile={16}>
          <Image
            src={parseMetadata.image}
            alt={parseMetadata.name}
            width={1470}
            height={1366}
            layout="responsive"
            objectFit="contain"
            priority
          />
        </Grid.Column>
        <Grid.Column computer={7} tablet={8} mobile={16}>
          {price && (
            <Price>
              <p>{price} WBNB</p>
              <span>${formattedPrice}</span>
            </Price>
          )}
          <Details>
            <div>
              <Icon icon="mdi:hand-coin" color="#CACACA" /> <p>Fee:</p>
              <strong>{fee}%</strong>
            </div>
            <div>
              <Icon icon="bi:people-fill" color="#CACACA" />{" "}
              <p>Max participants in C.T:</p>
              <strong>{maxParticipants}</strong>
            </div>
          </Details>
          <StyledOwnerAddress>
            <Icon icon="fa-solid:user-tag" color="#CACACA" />
            <h2>Owner:</h2>
            <span>{owner_of}</span>
          </StyledOwnerAddress>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default StadiumDetails;

const StadiumProperties = [
  {
    name: "Moon",
    fee: 9,
    maxParticipants: 12,
  },
  {
    name: "Mars",
    fee: 18,
    maxParticipants: 25,
  },
  {
    name: "Chaos",
    fee: 29,
    maxParticipants: 45,
  },
];
