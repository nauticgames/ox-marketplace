import { Icon } from "@iconify/react";
import StyledNetworkError from "./styles";

const NetworkError = () => {
  return (
    <StyledNetworkError>
      <Icon icon="carbon:warning-filled" color="#f03e3e" />
      <p>Network error, please refresh</p>
    </StyledNetworkError>
  );
};

export default NetworkError;
