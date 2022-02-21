import Image from "next/image";
import Link from "next/link";
import { StyledLogo } from "./styles";

const Logo = () => {
  return (
    <Link href="/">
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
    </Link>
  );
};

export default Logo;
