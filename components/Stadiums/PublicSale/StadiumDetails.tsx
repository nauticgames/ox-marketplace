import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Moralis } from "moralis";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import approveABI from "../../../abis/approveAllowance";
import purchaseStadiumABI from "../../../abis/purchaseStadiumABI";
import { Container, Grid, Loader } from "semantic-ui-react";
import { BuyButton, DisabledButton } from "./styles/detailsStyles";
import { Title, Price, Details } from "../detailsStyles";
import useUsdPrice from "../../../hooks/useUsdPrice";
import useChains from "../../../hooks/useChains";
import { erc20Contract, stadiumContract } from "../../../constants/contracts";

const StadiumDetails = ({ stadiumDetails }) => {
  const { nameBackground, name, fee, maxParticipants, price, img, type } =
    stadiumDetails;

  const { isAuthenticated, account } = useMoralis();
  const { usdPrice } = useUsdPrice();
  const { chain } = useChains();

  const [allowance, setAllowance] = useState(null);

  const web3Api = useMoralisWeb3Api();

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const unsubscribe = () => {
      setAllowance(null);
    };

    return unsubscribe();
  }, [account]);

  const getAllowance = async () => {
    const result = await web3Api.token.getTokenAllowance({
      chain,
      address: erc20Contract,
      owner_address: account,
      spender_address: stadiumContract,
    });

    return result;
  };

  const approveAllowance = async () => {
    const options = {
      functionName: "approve",
      contractAddress: erc20Contract,
      chain,
      abi: [approveABI],
      params: {
        spender: stadiumContract,
        amount: Moralis.Units.ETH(30),
      },
    };

    try {
      const tx: any = await Moralis.executeFunction(options);

      setFetching(true);

      await tx.wait();

      setFetching(false);
    } catch {
      return null;
    }
  };

  const verifyUserAllowance = () => {
    getAllowance()
      .then((res) => {
        const formatAllowance = Number(Moralis.Units.FromWei(res.allowance));

        setAllowance(formatAllowance);

        formatAllowance < price
          ? approveAllowance()
              .then(() => {
                runPurchaseTransaction();
              })
              .catch(() => {
                return null;
              })
          : runPurchaseTransaction();
      })
      .catch(() => {
        return null;
      });
  };

  const purchase = async () => {
    if (allowance === null || allowance < price) {
      verifyUserAllowance();
    }

    if (allowance >= price) {
      runPurchaseTransaction();
    }
  };

  const runPurchaseTransaction = async () => {
    const options = {
      functionName: "purchase",
      contractAddress: stadiumContract,
      chain,
      abi: [purchaseStadiumABI],
      params: {
        _type: type,
      },
    };

    try {
      const tx: any = await Moralis.executeFunction(options);

      setFetching(true);

      await tx.wait();

      setFetching(false);

      toast.success("Stadium purchased succesfull");
    } catch (error) {
      error && error.data
        ? toast.error(
            `Error: ${error.data.message.replace("execution reverted: ", "")}`
          )
        : toast.error("An error has ocurred");
    }
  };

  return (
    <Container fluid>
      <Title titleBackground={nameBackground}>
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
            <span>${usdPrice && (usdPrice * price).toFixed(2)}</span>
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
              <BuyButton disabled={fetching} onClick={purchase}>
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
