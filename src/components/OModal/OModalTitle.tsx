import React from "react";

const OModalTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h1 className="lg:ml-20 mt-5 mb-20 text-3xl font-bold m-0 dark:text-white">
    {children}
  </h1>
);

export default OModalTitle;
