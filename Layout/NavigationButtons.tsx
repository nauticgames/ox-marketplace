import React from "react";
import BackButton from "../components/UI/BackButton/BackButton";
import HomeButton from "../components/UI/HomeButton/HomeButton";
import styled from "styled-components";

const StyledNavigationContainer = styled.div`
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "initial")};
  padding: 0 6%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    padding: 0 3%;
    margin-bottom: 0;
  }
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
