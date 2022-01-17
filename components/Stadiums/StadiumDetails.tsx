import styled from "styled-components";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.nameBackground};
  display: flex;
  align-items: center;
  padding-left: 5%;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 0.9em;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: 55%;
  }
`;

const DetailsContainer = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  p {
    font-size: 2em;
    color: #efbf15;
    font-weight: 600;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding-bottom: 30px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    svg {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    p {
      color: #9e9e9e;
      font-size: 1em;
      margin-right: 10px;
    }

    strong {
      font-size: 1.3em;
      font-weight: 700;
      color: #535353;
    }
  }
`;

const BuyButton = styled.button`
  min-width: 230px;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 230px;
  height: 45px;
  background-color: #62d250;
  box-shadow: 4px 4px 12px rgba(83, 83, 83, 0.15);
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 10px;
    width: 28px;
    height: 28px;
  }

  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
      background: #7eeb6d;
      transition: background-color 0.2s ease;
    }
  }
`;

const StadiumDetails = ({ stadiumDetails }) => {
  const { nameBackground, name, fee, maxParticipants, price, img } =
    stadiumDetails;

  return (
    <Container>
      <Title nameBackground={nameBackground}>
        <h1>{name}</h1>
      </Title>
      <ImageContainer>
        <Image
          src={img}
          width={1470}
          height={1366}
          layout="responsive"
          objectFit="contain"
          quality={100}
          onLoadingComplete={(imageDimension) => console.log(imageDimension)}
        />
      </ImageContainer>
      <DetailsContainer>
        <Price>
          <p>{price} WBNB</p>
        </Price>
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
        <BuyButton>
          Buy <Icon icon="icons8:buy" color="#fff" />
        </BuyButton>
      </DetailsContainer>
    </Container>
  );
};

export default StadiumDetails;
