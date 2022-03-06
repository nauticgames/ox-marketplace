import { Icon } from "@iconify/react";
import { useMoralis } from "react-moralis";
import Balances from "../../UI/Balances";
import { Popup } from "semantic-ui-react";
import { useRef } from "react";
import cutAddress from "../../../utils/cutAddress";
import StyledAccountOverview from "./styles";
import useClipboard from "../../../hooks/useClipboard";

const AccountOverview = () => {
  const { account } = useMoralis();

  const addressRef = useRef(null);

  const { copy, copied } = useClipboard();

  return (
    <StyledAccountOverview>
      <div className="title">
        <h2>Account Overview</h2>
      </div>
      <div className="metamask-connected">
        <h2>Metamask connected</h2>
        <Icon icon="bi:check-circle-fill" color="#2ccd45" />
      </div>
      <div className="account-number">
        <input type="hidden" ref={addressRef} value={account || null} />
        <h2>Account:</h2>
        <p>{account && cutAddress(account)}</p>
        <Popup
          style={{ fontWeight: 600 }}
          content={copied ? "Copied" : "Copy to clipboard!"}
          position="top center"
          trigger={
            <span onClick={() => copy(addressRef)}>
              <Icon
                icon="akar-icons:copy"
                color={copied ? "rgb(44, 205, 69)" : "#8f8f8f"}
              />
            </span>
          }
        />
      </div>
      <Balances />
    </StyledAccountOverview>
  );
};

export default AccountOverview;
