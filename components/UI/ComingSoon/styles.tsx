import styled from "styled-components";

const StyledComingSoon = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: relative;
  margin: auto;
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: initial;
  }
`;

export { StyledComingSoon };
