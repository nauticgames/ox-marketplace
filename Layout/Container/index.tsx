import { ReactChild, ReactChildren } from "react";
import StyledContainer from "./styles";

interface IContainerLayoutProps {
  children?: ReactChildren | ReactChild;
}

const ContainerLayout = ({ children }: IContainerLayoutProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ContainerLayout;
