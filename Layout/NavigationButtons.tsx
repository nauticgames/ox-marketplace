import React from "react";
import BackButton from "../components/UI/BackButton/BackButton";
import HomeButton from "../components/UI/HomeButton/HomeButton";
import styled from "styled-components";

const StyledNavigationContainer = styled.div`
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "initial")};
  padding: 0 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface NavigationButtonsProps {
  mt?: number;
  path?: string;
}

const NavigationButtons = ({ mt, path }: NavigationButtonsProps) => {
  return (
    <StyledNavigationContainer mt={mt} path={path}>
      <HomeButton />
      <BackButton path={path} />
    </StyledNavigationContainer>
  );
};

export default NavigationButtons;
