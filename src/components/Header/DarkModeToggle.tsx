import React from "react";
import { useTheme } from "next-themes";
import styled from "styled-components";

const Styled = styled.div`
  .spring {
    transition-timing-function: cubic-bezier(0, 0, 0.125, 1.65);
  }
`;
function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Styled className="ml-auto flex items-center relative">
      <div className="opacity-0 text-gray-700 text-3xl mr-5 pointer-events-none">
        <span className="iconify" data-icon="bi:sun-fill" />
      </div>
      <div
        className={`text-gray-700 text-3xl mr-5 duration-300 absolute left-0 spring cursor-pointer ${
          theme == "dark" ? "opacity-0 pointer-events-none rotate-180" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <span className="iconify" data-icon="bi:sun-fill" />
      </div>
      <div
        className={`text-gray-300 text-2xl mr-5 duration-300 absolute left-0 spring cursor-pointer ${
          theme == "dark" ? "" : "opacity-0 pointer-events-none -rotate-180"
        }`}
        onClick={() => setTheme("light")}
      >
        <span className="iconify" data-icon="bi:moon-fill" />
      </div>
    </Styled>
  );
}

export default DarkModeToggle;
