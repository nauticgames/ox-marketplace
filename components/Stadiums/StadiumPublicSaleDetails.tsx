import styled from "styled-components";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import S3 from "react-aws-s3";

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
  height: 50px;
  background-color: ${(props) => props.nameBackground};
  display: flex;
  align-items: center;
  padding-left: 30px;

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 1em;
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

  p {
    font-size: 2em;
    color: #efbf15;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    margin-top: 0;

    p {
      font-size: 2.4em;
    }
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

  @media (min-width: 768px) {
    div {
      svg {
        width: 35px;
        height: 35px;
      }

      p {
        font-size: 1.2em;
      }

      strong {
        font-size: 1.6em;
      }
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

const UnAuthButton = styled.div`
  min-width: 230px;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #ebebeb;
  width: 230px;
  height: 45px;
  color: #868686;
  border: 1px solid #cacaca;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StadiumDetails = ({ stadiumDetails }) => {
  const { nameBackground, name, fee, maxParticipants, price, img } =
    stadiumDetails;

  const { isAuthenticated } = useMoralis();

  const config = {
    bucketName: "oxstadiums",
    region: "us-east-1",
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  };

  const ReactS3Client = new S3(config);

  const uploadMetadata = () => {
    const id = prompt("Ingresa id");

    const file = {
      itemId: id,
      name: `Chaos Stadium #${id}`,
      description: "OX Soccer Stadiums",
      external_url: "https://marketplace.oxsoccer.com/",
      image: "https://marketplace.oxsoccer.com/assets/img/chaos.png",
      attributes: [
        {
          trait_type: "Stadium Type",
          value: "Chaos",
        },
      ],
    };

    const fileName = `${id}.json`;

    ReactS3Client.uploadFile(file, fileName)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Title nameBackground={nameBackground}>
        <h1>{name}</h1>
      </Title>
      <ImageContainer>
        <Image
          src={img}
          alt={name}
          width={1470}
          height={1366}
          layout="responsive"
          objectFit="contain"
          quality={100}
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
        {isAuthenticated ? (
          <BuyButton onClick={uploadMetadata}>
            Buy <Icon icon="icons8:buy" color="#fff" />
          </BuyButton>
        ) : (
          <UnAuthButton>Sign in to buy!</UnAuthButton>
        )}
      </DetailsContainer>
    </Container>
  );
};

export default StadiumDetails;
