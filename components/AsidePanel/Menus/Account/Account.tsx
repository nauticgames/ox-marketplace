import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import PanelButton from "../../PanelButton";
import { AccountItems } from "../../Items";

const Account = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Row>
        <Col>
          {AccountItems.map(({ label, src, name, path }) => (
            <PanelButton
              path={path}
              name={name}
              key={label}
              label={label}
              src={src}
              active={pathname === path || pathname.includes(path)}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Account;
