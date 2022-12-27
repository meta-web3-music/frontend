import { useTheme } from "next-themes";
import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";

type Props = {
  isLoading?: boolean;
  color: "blue" | "yellow" | "gray";
  btnType: "outline" | "fill";
};

const colors = {
  blue: ["#003C83", "#003C83"],
  yellow: ["#F3EA01", "#948f03"],
  gray: ["#E6E6E6", "#000000a9"],
};

const borderColors = {
  ...colors,
  yellow: ["#A39C01", "#A39C01"],
};

const textColors = {
  blue: ["white", "white"],
  yellow: ["black", "black"],
  gray: ["black", "#cfcfcf"],
};
const StyledButton = styled.button<{
  color: string;
  borderColor?: string;
  textColor: string;
}>`
  border: 2px solid ${(p) => (p.borderColor ? p.borderColor : "transparent")};
  color: ${(p) => p.textColor};
  &.bg {
    background-color: ${(p) => (p.borderColor ? "transparent" : p.color)};
  }
  &:hover {
    box-shadow: 0px 0px 14px -2px ${(p) => (p.borderColor ? p.borderColor : p.color)};
  }

  &:focus-visible {
    box-shadow: 0px 0px 14px -2px ${(p) => (p.borderColor ? p.borderColor : p.color)};
  }
`;
const OButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ isLoading, color, btnType, ...p }) => {
  const { resolvedTheme } = useTheme();

  return (
    <StyledButton
      borderColor={btnType == "outline" ? borderColors[color][0] : ""}
      color={resolvedTheme == "dark" ? colors[color][1] : colors[color][0]}
      type="button"
      {...p}
      textColor={
        resolvedTheme == "dark" ? textColors[color][1] : textColors[color][0]
      }
      className={`rounded-lg px-4 py-2 text-md flex items-center justify-center 
    duration-100 outline-none font-bold ${p.className} ${
        btnType == "fill" ? "bg" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading && <Spinner className="mr-3"></Spinner>}
      {p.children}
    </StyledButton>
  );
};

export default OButton;
