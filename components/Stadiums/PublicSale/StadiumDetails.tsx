import { useEffect } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Icon } from "@iconify/react";
import { Container, Grid, Loader } from "semantic-ui-react";
import {
  DisabledButton,
  StyledApproveButton,
  StyledBuyButton,
  StyledNetworkError,
} from "./styles/detailsStyles";
import { Title, Price, Details } from "../StadiumDetails/styles";
import useUsdPrice from "../../../hooks/useUsdPrice";
import { chainId as chain } from "../../../constants/chain";
import StadiumsLeft from "./StadiumsLeft";
import { useDispatch, useSelector } from "react-redux";
import { stadiumPurchaseAction } from "../../../redux/actions/stadiumsPurchase";
import useChain from "../../../hooks/useChain";
import { getWBNBbalance } from "../../../utils/getTokenBalances";
import toast from "react-hot-toast";
import { getWbnbAllowanceAction } from "../../../redux/actions/allowance";
import { approveWbnbAction } from "../../../redux/actions/approve";

const StadiumDetails = ({ stadiumDetails }) => {
  const { nameBackground, name, fee, maxParticipants, price, img, type } =
    stadiumDetails;

  const { isAuthenticated, account } = useMoralis();

  const { currentChain, switchChain } = useChain();

  const { usdPrice } = useUsdPrice();
  const dispatch = useDispatch();

  const purchaseState = useSelector((state: any) => state.stadiumPurchase);
  const { allowance, networkError, allowanceFetching } = useSelector(
    (state: any) => state.allowance
  );
  const { approveFetching } = useSelector((state: any) => state.approve);

  useEffect(() => {
    if (!account) return;

    const unsubscribe = () => {
      dispatch(getWbnbAllowanceAction(account));
    };

    return unsubscribe();
  }, [account]);

  const approveWBNB = async () => {
    dispatch(approveWbnbAction(account));
  };

  const purchase = async () => {
    if (currentChain !== chain) {
      return switchChain();
    }

    if (allowance.wbnb < price) {
      return;
    }

    try {
      const balance = await getWBNBbalance(account);

      if (balance < price) {
        return toast.error("You don't have enought money");
      }

      dispatch(stadiumPurchaseAction(type));
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
            allowance.wbnb !== null && !networkError.wbnb ? (
              allowance.wbnb < price ? (
                <>
                  <ApproveButton
                    fetching={approveFetching.wbnb}
                    approveFunction={approveWBNB}
                  />
                </>
              ) : (
                <>
                  <BuyButton
                    purchase={purchase}
                    fetching={purchaseState.fetching}
                  />
                </>
              )
            ) : (
              <Grid centered>
                <Loader inline size="medium" active={allowanceFetching.wbnb} />
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
