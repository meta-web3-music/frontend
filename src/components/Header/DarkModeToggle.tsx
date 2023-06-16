"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [_theme, _setTheme] = useState<string>();
  useEffect(() => {
    _setTheme(resolvedTheme);
  }, [resolvedTheme]);
  return (
    <div className="ml-auto flex items-center relative">
      <div className="opacity-0 text-gray-700 text-3xl mr-5 pointer-events-none">
        <span className="iconify" data-icon="bi:sun-fill" />
      </div>
      <div
        className={`text-gray-700 text-3xl mr-5 duration-300 absolute left-0 spring-light cursor-pointer ${
          _theme == "dark" ? "opacity-0 pointer-events-none rotate-180" : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <span className="iconify" data-icon="bi:sun-fill" />
      </div>
      <div
        className={`text-gray-300 text-2xl mr-5 duration-300 absolute left-0 spring cursor-pointer translate-x-1 ${
          _theme == "dark" ? "" : "opacity-0 pointer-events-none -rotate-180"
        }`}
        onClick={() => setTheme("light")}
      >
        <span className="iconify" data-icon="bi:moon-fill" />
      </div>
    </div>
  );
}

export default DarkModeToggle;
