import React from "react";

const OModalForm: React.FC<
  React.PropsWithChildren & React.HtmlHTMLAttributes<HTMLFormElement>
> = ({ children, ...p }) => {
  return (
    <form
      className="flex flex-col bg-[#F7F7F7] pt-16 px-14 w-full h-full z-20  shadow-2xl font-figtree overflow-scroll"
      {...p}
    >
      {children}
    </form>
  );
};

export default OModalForm;
