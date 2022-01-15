import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface LogoProps {
  source: string;
}

const StyledLogo = styled.a`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 0.8em;
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
        <p>Marketplace</p>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
