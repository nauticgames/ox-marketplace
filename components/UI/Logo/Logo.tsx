import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface LogoProps {
  source: string;
}

const StyledLogo = styled.a`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 0.9em;
    color: #c4c4c4;
    font-weight: 400;
    margin-left: 90px;
  }
`;

const Logo = ({ source }: LogoProps) => {
  return (
    <Link href="/">
      <StyledLogo rel="noreferrer">
        <Image
          src={source}
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
