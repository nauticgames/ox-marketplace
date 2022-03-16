import { useContext, useEffect } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Icon } from "@iconify/react";
import { Container, Grid } from "semantic-ui-react";
import { Title, Price, StyledDetails, SectionCard } from "../../Details/styles";
import useUsdPrice from "../../../../../hooks/useUsdPrice";
import { CorrectChainId } from "../../../../../constants/chain";
import Remaining from "../Remaining";
import { useDispatch, useSelector } from "react-redux";
import { StadiumPurchaseAction } from "../../../../../State/actions/stadiums/purchase";
import { getWBNBBalance } from "../../../../../services/tokenBalance";
import toast from "react-hot-toast";
import { GetWbnbAllowanceAction } from "../../../../../State/actions/token/allowance";
import { ApproveWBNBAction } from "../../../../../State/actions/token/approve";
import { IWeb3Context, Web3Context } from "../../../../../context/Web3Context";
import PurchaseActions from "./Actions";

const Details = ({ data }) => {
  const { stadiumColor, label, fee, maxParticipants, price, img, type } = data;

  const { switchChain, web3Provider }: IWeb3Context = useContext(Web3Context);

  const { isAuthenticated, account, web3 } = useMoralis();

  const { usdPrice } = useUsdPrice();
  const dispatch = useDispatch();

  const purchaseState = useSelector((state: any) => state.STADIUM_PURCHASE);
  const { allowance, networkError, allowanceFetching } = useSelector(
    (state: any) => state.TOKEN_ALLOWANCE
  );
  const { approveFetching } = useSelector((state: any) => state.TOKEN_APPROVE);

  useEffect(() => {
    if (!web3Provider) return;

    const unsubscribe = () => {
      dispatch(GetWbnbAllowanceAction(account));
    };

    return unsubscribe();
  }, [web3Provider]);

  const approveWBNB = async () => {
    if (web3.network.chainId !== CorrectChainId) {
      return switchChain();
    }

    dispatch(ApproveWBNBAction(account));
  };

  const purchase = async () => {
    if (web3.network.chainId !== CorrectChainId) {
      return switchChain();
    }

    if (allowance.wbnb < price) {
      return toast.error("Insufficient allowance!");
    }

    try {
      const balance = await getWBNBBalance(account);

      if (balance < price) {
        return toast.error("You don't have enough money");
      }

      dispatch(StadiumPurchaseAction(type));
    } catch {
      return;
    }
  };

  return (
    <Container fluid>
      <Title stadiumColor={stadiumColor}>
        <h1>{label}</h1>
        <Remaining type={type} />
      </Title>
      <Grid>
        <Grid.Column computer={9} tablet={8} mobile={16}>
          <Image
            src={img}
            alt={label}
            width={1470}
            height={1366}
            layout="responsive"
            priority
            objectFit="contain"
            quality={100}
          />
        </Grid.Column>
        <Grid.Column computer={7} tablet={8} mobile={16}>
          <SectionCard>
            <h2 className="section__title">Price</h2>
            <Price>
              <p>{price} WBNB</p>{" "}
              <span>${usdPrice && (usdPrice * price).toFixed(2)}</span>
            </Price>
          </SectionCard>
          <SectionCard>
            <h2 className="section__title">Details</h2>
            <StyledDetails>
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
          <PurchaseActions
            purchase={purchase}
            allowance={{ wbnb: allowance.wbnb }}
            approve={approveWBNB}
            fetching={{
              allowance: allowanceFetching.wbnb,
              approve: approveFetching.wbnb,
              purchase: purchaseState.fetching,
            }}
            error={networkError.wbnb}
            isAuthenticated={isAuthenticated}
            price={price}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Details;
