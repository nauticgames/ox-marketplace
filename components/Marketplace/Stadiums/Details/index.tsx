import Image from "next/image";
import { Container, Grid } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import {
  StyledOwnerAddress,
  Title,
  StyledDetails,
  Price,
  SectionCard,
} from "./styles";
import useUsdPrice from "../../../../hooks/useUsdPrice";
import Data from "../Data";
import { IStadiumMetadata } from "../../../../types/Components";
import cutAddress from "../../../../utils/cutAddress";

const StadiumDetails = ({ data, price }: IStadiumMetadata) => {
  const { owner, image, name, attributes } = data;

  const { formattedPrice } = useUsdPrice();

  const { stadiumColor, fee, maxParticipants } = Data.find(
    (data) => data.name === attributes[0].value
  );

  return (
    <Container>
      <Title stadiumColor={stadiumColor || ""}>
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
          {price && (
            <Price>
              <p>{price} WBNB</p>
              <span>${formattedPrice}</span>
            </Price>
          )}
          <SectionCard>
            <StyledDetails>
              <h2 className="section__title">Details</h2>
              <div>
                <Icon icon="mdi:hand-coin" color="#CACACA" /> <p>Fee:</p>
                <strong>{fee}%</strong>
              </div>
              <div>
                <Icon icon="bi:people-fill" color="#CACACA" />{" "}
                <p>Max participants in C.T:</p>
                <strong>{maxParticipants}</strong>
              </div>
            </StyledDetails>
          </SectionCard>
          <SectionCard>
            <StyledOwnerAddress>
              <Icon icon="fa-solid:user-tag" color="#CACACA" />
              <h2>Owner:</h2>
              <span>{cutAddress(owner)}</span>
            </StyledOwnerAddress>
          </SectionCard>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default StadiumDetails;
