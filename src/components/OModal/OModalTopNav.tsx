import React from "react";

const OModalTopNav: React.FC<
  React.PropsWithChildren & { notActive?: boolean }
> = ({ children, notActive }) => (
  <div className="w-1/2 mr-1">
    <div
      className={`h-1 ${
        notActive
          ? "bg-[rgb(0,0,0,0.20)] dark:bg-gray-600"
          : "bg-[rgb(0,0,0,0.55)] dark:bg-white"
      } rounded-2xl`}
    ></div>
    <p
      className={`mt-2 ${
        notActive
          ? "text-[rgb(0,0,0,0.40)] dark:text-gray-600"
          : "text-black dark:text-white"
      }`}
    >
      {children}
    </p>
  </div>
);

export default OModalTopNav;
