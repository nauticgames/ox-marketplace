import styled from "styled-components";

interface IComingSoonProps {
  width: number;
  height: number;
}

const StyledComingSoon = styled.div`
  width: ${(props: IComingSoonProps) => `${props.width}px`};
  height: ${(props: IComingSoonProps) => `${props.height}px`};
  position: relative;
  margin: auto;
  max-width: 90%;

  @media (min-width: 768px) {
    max-width: initial;
  }
`;

export { StyledComingSoon };
