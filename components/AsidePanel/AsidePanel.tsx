import React, { useState } from "react";
import styled from "styled-components";
import Marketplace from "./Menus/Marketplace/Marketplace";
import { useRouter } from "next/router";
import CapitalizePathname from "../../utils/CapitalizePathname";

const StyledAsidePanel = styled.aside`
  min-width: 240px;
  width: 240px;
  background-color: #fff;
  height: 100vh;
  padding: 20px 0;
`;

const AsidePanel = () => {
  const { pathname } = useRouter();
  const [current, setCurrent] = useState(CapitalizePathname(pathname));

  return (
    <StyledAsidePanel>
      <Marketplace current={current} setCurrent={setCurrent} />
    </StyledAsidePanel>
  );
};

export default AsidePanel;
