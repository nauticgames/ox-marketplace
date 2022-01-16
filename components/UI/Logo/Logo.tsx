import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface LogoProps {
  source: string;
}

const StyledLogo = styled.a`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  cursor: pointer;

  h1 {
    font-size: 0.9em;
    color: #c4c4c4;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-right: 5px;
  }
`;

const Logo = ({ source }: LogoProps) => {
  return (
    <Link href="/">
      <StyledLogo rel="noreferrer">
        <img src={source} alt="Logo" />
        <h1>Marketplace</h1>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
