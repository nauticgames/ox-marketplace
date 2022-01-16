import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-grid-system";
import PanelButton from "../../PanelButton";
import { MarketplaceItems } from "../../Items";

const Marketplace = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Row>
        <Col>
          {MarketplaceItems.map(({ label, src, name, path }) => (
            <PanelButton
              path={path}
              name={name}
              key={label}
              label={label}
              src={src}
              active={pathname === path}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Marketplace;
