import Image from "next/image";
import { StyledLogo } from "./styles";

const Logo = () => {
  return (
    <StyledLogo rel="noreferrer">
      <Image
        src="/assets/img/logo.png"
        alt="Logo"
        layout="fill"
        objectFit="contain"
        quality={100}
      />
      <h1>Marketplace</h1>
    </StyledLogo>
  );
};

export default Logo;
