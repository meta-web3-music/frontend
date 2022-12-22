import React from "react";
import Spinner from "../Spinner/Spinner";

type Props = {
  isLoading?: boolean;
};
const OButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ isLoading, ...rest }) => (
  <button
    type="button"
    {...rest}
    className={`bg-[#003C83] text-white rounded-lg px-4 py-3 text-lg w-full flex items-center justify-center 
    hover:shadow-[0_0px_18px_4px_#0255bb95] duration-100 hover:scale-95 focus-visible:shadow-[0_0px_18px_4px_#0255bb95] outline-none ${rest.className}`}
  >
    {isLoading && <Spinner className="mr-3"></Spinner>}
    {rest.children}
  </button>
);

export default OButton;
