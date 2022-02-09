import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useMoralis } from "react-moralis";
import LunyBalances from "../UI/LunyBalances/LunyBalances";
import { Popup } from "semantic-ui-react";
import { useEffect, useRef, useState } from "react";
import cutAddress from "../../utils/cutAddress";
import copyToClipboard from "../../utils/clipboard";

const StyledAccountOverview = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 2px 2px 8px rgba(83, 83, 83, 0.1);
  border-left: 5px solid #2f57f7;

  .title {
    width: 100%;
    margin-bottom: 20px;

    h2 {
      font-size: 2em;
      font-weight: 600;
      color: #828282;
    }
  }

  .metamask-connected {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      font-size: 1.1em;
      font-weight: 600;
      color: #828282;
    }
    svg {
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }
  }

  .account-number {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2,
    p {
      margin-right: 5px;
    }

    h2 {
      font-size: 1.2em;
      color: #828282;
      font-weight: 600;
    }

    p {
      font-size: 1.1em;
      color: #a3a3a3;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;

const AccountOverview = () => {
  const { account } = useMoralis();

  const [copied, setCopied] = useState(false);

  const linkRef = useRef(null);

  const copyAddress = () => {
    if (!copied) {
      copyToClipboard(linkRef);
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

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
        <input type="hidden" ref={linkRef} value={account || null} />
        <h2>Account:</h2>
        <p>{account && cutAddress(account)}</p>
        <Popup
          style={{ fontWeight: 600 }}
          content={copied ? "Copied" : "Copy to clipboard!"}
          position="top center"
          trigger={
            <span onClick={() => copyAddress()}>
              <Icon
                icon="akar-icons:copy"
                color={copied ? "rgb(44, 205, 69)" : "#8f8f8f"}
              />
            </span>
          }
        />
      </div>
      <LunyBalances />
    </StyledAccountOverview>
  );
};

export default AccountOverview;
