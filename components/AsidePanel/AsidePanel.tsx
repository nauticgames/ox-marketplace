import styled from "styled-components";
import Marketplace from "./Menus/Marketplace/Marketplace";
import useWindowSize from "../../hooks/useWindowsSize";

const StyledAsidePanel = styled.aside`
  position: fixed;
  min-width: 240px;
  width: 240px;
  background-color: #fff;
  height: 100vh;
  padding: 100px 0 20px 0;
  transition: min-width 0.2s ease, width 0.2s ease;
`;

const AsidePanel = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width && width < 800 ? (
        <h1>Mobile</h1>
      ) : (
        <StyledAsidePanel>
          <Marketplace />
        </StyledAsidePanel>
      )}
    </>
  );
};

export default AsidePanel;
