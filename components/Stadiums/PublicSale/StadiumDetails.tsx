import { useChain, useMoralis } from "react-moralis";
import { Moralis } from "moralis";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import approveABI from "../../../abis/approveAllowance";
import purchaseStadiumABI from "../../../abis/purchaseStadiumABI";
import { Container, Grid, Loader } from "semantic-ui-react";
import {
  DisabledButton,
  StyledApproveButton,
  StyledBuyButton,
  StyledNetworkError,
} from "./styles/detailsStyles";
import { Title, Price, Details } from "../StadiumDetails/styles";
import useUsdPrice from "../../../hooks/useUsdPrice";
import { erc20Contract, stadiumContract } from "../../../constants/contracts";
import handleRpcErrors from "../../../utils/handleRpcErrors";
import { chainId as chain } from "../../../constants/chain";
import StadiumsLeft from "./StadiumsLeft";
import getApprovals from "../../../utils/getApprovals";

const StadiumDetails = ({ stadiumDetails }) => {
  const { nameBackground, name, fee, maxParticipants, price, img, type } =
    stadiumDetails;

  const currentChain = Moralis.chainId;
  const { switchNetwork } = useChain();

  const { isAuthenticated, account } = useMoralis();
  const { usdPrice } = useUsdPrice();

  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const [lastApproval, setLastApproval] = useState(null);

  useEffect(() => {
    const unsubscribe = () => {
      getApprovals(setError, setLastApproval, account);
    };

    account && unsubscribe();
  }, [account]);

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

      await getApprovals(setError, setLastApproval, account);

      setFetching(false);
    } catch {
      return;
    }
  };

  const purchase = async () => {
    try {
      if (currentChain && currentChain !== chain) {
        switchNetwork(chain);
      } else {
        const options = {
          functionName: "purchase",
          contractAddress: stadiumContract,
          chain,
          abi: [purchaseStadiumABI],
          params: {
            _type: type,
          },
        };

        const erc20Balance = await Moralis.Web3API.account.getTokenBalances({
          address: account,
          chain,
          token_addresses: [erc20Contract],
        });

        if (!erc20Balance || !erc20Balance.length) {
          return toast.error("You don't have enought money");
        }

        const balance = Number(Moralis.Units.FromWei(erc20Balance[0].balance));

        if (balance < price) {
          return toast.error("You don't have enought money");
        }

        try {
          const tx: any = await Moralis.executeFunction(options);

          setFetching(true);

          await tx.wait();

          setFetching(false);

          toast.success("Stadium purchased succesfull");
        } catch (error) {
          return handleRpcErrors(error);
        }
      }
    } catch {
      return;
    }
  };

  return (
    <Container fluid>
      <Title titleBackground={nameBackground}>
        <h1>{name}</h1>
        <StadiumsLeft type={type} />
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
            error ? (
              <NetworkError />
            ) : lastApproval !== null ? (
              lastApproval < price ? (
                <>
                  <ApproveButton
                    fetching={fetching}
                    approveFunction={approveAllowance}
                  />
                </>
              ) : (
                <>
                  <BuyButton purchase={purchase} fetching={fetching} />
                </>
              )
            ) : (
              <Grid centered>
                <Loader inline size="medium" active />
              </Grid>
            )
          ) : (
            <DisabledButton>Sign in to buy!</DisabledButton>
          )}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default StadiumDetails;

const BuyButton = ({ purchase, fetching }) => {
  return (
    <StyledBuyButton disabled={fetching} onClick={purchase}>
      {fetching ? (
        <>
          <Loader active inline size="small" />
        </>
      ) : (
        <>
          Buy <Icon icon="icons8:buy" color="#fff" />
        </>
      )}
    </StyledBuyButton>
  );
};

const ApproveButton = ({ approveFunction, fetching }) => {
  return (
    <StyledApproveButton disabled={fetching} onClick={approveFunction}>
      {fetching ? (
        <>
          <Loader active inline size="small" />
        </>
      ) : (
        <>Approve WBNB</>
      )}
    </StyledApproveButton>
  );
};

const NetworkError = () => {
  return (
    <StyledNetworkError>
      <Icon icon="carbon:warning-filled" color="#f03e3e" />
      <p>Network error, please refresh</p>
    </StyledNetworkError>
  );
};
