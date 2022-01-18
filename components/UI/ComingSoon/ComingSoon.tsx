import Image from "next/image";
import styled from "styled-components";

const StyledComingSoon = styled.div`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  position: relative;
  margin: auto;
`;

const ComingSoon = ({ width, height }) => {
  return (
    <StyledComingSoon width={width} height={height}>
      <Image
        src="/assets/img/coming-soon.png"
        layout="responsive"
        height={width}
        width={width}
        objectFit="contain"
        quality={100}
      />
    </StyledComingSoon>
  );
};

export default ComingSoon;
