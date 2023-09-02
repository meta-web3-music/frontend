import React from "react";

const OModalTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1 className="mt-5 mb-12 text-5xl font-bold m-0 dark:text-white">
    {children}
  </h1>
);

export default OModalTitle;
