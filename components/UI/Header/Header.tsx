import React from "react";
import { Col, Container, Row } from "react-grid-system";
import styled from "styled-components";
import LoginButton from "../Buttons/LoginButton/LoginButton";
import Logo from "../Logo/Logo";

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(116, 116, 116, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
`;

const Header = () => {
  return (
    <Container fluid style={{ padding: 0, width: "100%" }}>
      <StyledHeader>
        <Row>
          <Col>
            <Logo source="/assets/img/logo.png" />
          </Col>
        </Row>
        <Row>
          <Col>
            <LoginButton />
          </Col>
        </Row>
      </StyledHeader>
    </Container>
  );
};

export default Header;
