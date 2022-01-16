import { useEffect, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowsSize";

const StyledMain = styled.main`
  margin-left: ${(props) => (props.isMobile ? "0" : "240px")};
`;

const Main = ({ children }) => {
  const { width } = useWindowSize();

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (width) {
      width < 800 ? setIsMobile(true) : setIsMobile(false);
    }
  }, [width]);

  return <StyledMain isMobile={isMobile}>{children}</StyledMain>;
};

export default Main;
