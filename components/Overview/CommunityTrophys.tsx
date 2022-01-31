import styled from "styled-components";
import { Icon } from "@iconify/react";
import ComingSoon from "../UI/ComingSoon/ComingSoon";

const StyledCommunityTrophys = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 8px rgba(83, 83, 83, 0.1);

  .title {
    width: 100%;
    height: 60px;
    background-color: #2f57f7;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.1em;
      font-weight: 500;
      color: #fff;
      margin-right: 10px;
    }
  }
`;

const CommunityTrophys = () => {
  return (
    <StyledCommunityTrophys>
      <div className="title">
        <h2>Community Trophys</h2>
        <Icon icon="fxemoji:trophy" width="24" height="24" />
      </div>
      <ComingSoon width={300} height={300} />
    </StyledCommunityTrophys>
  );
};

export default CommunityTrophys;
