import { useMoralis, useMoralisWeb3Api, useTokenPrice } from "react-moralis";
import { Moralis } from "moralis";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";
import useOptions from "../../hooks/useOptions";
import approveABI from "../../abis/approveAllowance";
import purchaseStadiumABI from "../../abis/purchaseStadiumABI";
import { Container, Grid, Loader } from "semantic-ui-react";

export const Title = styled.div`
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

export const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding-bottom: 20px;

  p {
    font-size: 2em;
    color: #efbf15;
    font-weight: 600;
  }

  span {
    font-size: 1.3em;
    font-weight: 500;
    color: #cacaca;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 0;

    p {
      font-size: 2.4em;
    }
  }
`;

export const Details = styled.div`
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
  width: 100%;
  height: 45px;
  background-color: #62d250;
  box-shadow: 4px 4px 12px rgba(83, 83, 83, 0.15);
  border-radius: 5px;
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

const DisabledButton = styled.div`
  width: 100%;
  height: 45px;
  margin: 0 auto;
  margin-bottom: 30px;
  background-color: #ebebeb;
  color: #868686;
  border: 1px solid #cacaca;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StadiumDetails = ({ stadiumDetails }) => {
  const { nameBackground, name, fee, maxParticipants, price, img, type } =
    stadiumDetails;

  const { isAuthenticated, account } = useMoralis();

  const web3Api = useMoralisWeb3Api();

  const stadiumContract = process.env.NEXT_PUBLIC_DEVELOPMENT_STADIUM_CONTRACT;

  const [fetching, setFetching] = useState(false);

  const { data: formattedData } = useTokenPrice({
    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    chain: "bsc",
  });

  const getAllowance = async () => {
    const result = await web3Api.token.getTokenAllowance({
      chain: "0x4",
      address: "0xDd946a5C1dA0C727D4b748270aE1b59aa5f8c8A8",
      owner_address: account,
      spender_address: stadiumContract,
    });

    return result;
  };

  const approveAllowance = async () => {
    const options = useOptions({
      functionName: "approve",
      contractAddress: "0xDd946a5C1dA0C727D4b748270aE1b59aa5f8c8A8",
      chain: "0x4",
      abi: approveABI,
      params: {
        spender: stadiumContract,
        amount: Moralis.Units.ETH(30),
      },
    });

    try {
      const tx: any = await Moralis.executeFunction(options);

      setFetching(true);

      await tx.wait();

      setFetching(false);
    } catch {
      return;
    }
  };

  const purchaseStadium = async () => {
    getAllowance()
      .then((res) => {
        const allowance = Number(Moralis.Units.FromWei(res.allowance));

        if (allowance < price) {
          approveAllowance()
            .then(() => {
              purchase();
            })
            .catch(() => {
              return;
            });
        } else {
          purchase();
        }
      })
      .catch(() => {
        return;
      });

    const purchase = async () => {
      const options = useOptions({
        functionName: "purchase",
        contractAddress: stadiumContract,
        chain: "0x4",
        abi: purchaseStadiumABI,
        params: {
          _type: type,
        },
      });

      try {
        const tx: any = await Moralis.executeFunction(options);

        setFetching(true);

        await tx.wait();

        setFetching(false);

        toast.success("Stadium purchased succesfull");
      } catch ({ error }) {
        error &&
          toast.error(
            `Error: ${error.message.replace("execution reverted: ", "")}`
          );
      }
    };
  };

  return (
    <Container fluid>
      <Title nameBackground={nameBackground}>
        <h1>{name}</h1>
      </Title>
      <Grid>
        <Grid.Column computer={9} tablet={8} mobile={16}>
          <Image
            src={img}
            alt={name}
            width={1470}
            height={1366}
            layout="responsive"
            objectFit="contain"
            quality={100}
          />
        </Grid.Column>
        <Grid.Column computer={7} tablet={8} mobile={16}>
          <Price>
            <p>{price} WBNB</p>{" "}
            <span>
              ${formattedData && (formattedData.usdPrice * price).toFixed(2)}
            </span>
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
            <>
              <BuyButton disabled={fetching} onClick={purchaseStadium}>
                {fetching ? (
                  <>
                    <Loader active inline size="small" />
                  </>
                ) : (
                  <>
                    Buy <Icon icon="icons8:buy" color="#fff" />
                  </>
                )}
              </BuyButton>
            </>
          ) : (
            <DisabledButton>Sign in to buy!</DisabledButton>
          )}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default StadiumDetails;
