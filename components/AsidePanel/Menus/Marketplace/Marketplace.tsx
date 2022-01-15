import React from "react";
import { Col, Container, Row } from "react-grid-system";
import Button from "../../Button";
import Items from "./Items";

interface MenuProps {
  current: string;
  setCurrent: any;
}

const Marketplace = ({ current = "Stadiums", setCurrent }: MenuProps) => {
  return (
    <Container>
      <Row>
        <Col>
          {Items.map(({ label, src }) => (
            <Button
              key={label}
              label={label}
              src={src}
              active={current === label ? true : false}
              setCurrent={setCurrent}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Marketplace;
