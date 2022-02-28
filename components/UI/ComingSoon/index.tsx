import Image from "next/image";
import { StyledComingSoon } from "./styles";

const ComingSoon = ({ width, height }) => {
  return (
    <StyledComingSoon width={width} height={height}>
      <Image
        src="/assets/img/coming-soon.png"
        alt="Coming soon image"
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
