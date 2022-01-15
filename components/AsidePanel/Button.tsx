import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import CapitalizePathname from "../../utils/CapitalizePathname";

interface ButtonProps {
  label: string;
  src: string;
  active?: boolean;
  setCurrent: any;
}

const Button = ({ label, src, active, setCurrent }: ButtonProps) => {
  const StyledButton = styled.button`
    width: 100%;
    height: 55px;
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding-left: 15px;
    border-left: ${active ? "4px solid #4a6cf5" : "4px solid transparent"};
    background: ${active
      ? "linear-gradient(90.01deg, #DDDAFF 0.01%, rgba(255, 255, 255, 0) 99.99%)"
      : "#fff"};

    color: ${active ? "#3a3a3a" : "#929292"};
    font-weight: ${active ? 600 : 500};
    font-size: 0.8em;

    &:hover {
      color: ${active ? "#3a3a3a" : "#616161"};
    }

    img {
      margin-left: 10px;
      width: 28px;
      height: 28px;
    }
  `;

  const router = useRouter();

  const redirect = () => {
    if (CapitalizePathname(router.pathname) !== label) {
      router.push(label.toLowerCase());
    }
  };

  return (
    <StyledButton
      onClick={() => {
        setCurrent(label), redirect();
      }}
    >
      {label} <img src={src} alt={label} />
    </StyledButton>
  );
};

export default Button;
