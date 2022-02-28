import { Icon } from "@iconify/react";
import ComingSoon from "../../../UI/ComingSoon";
import StyledCommunityTrophys from "./styles";

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
