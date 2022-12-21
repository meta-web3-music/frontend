import React from "react";
const OInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((p, ref) => (
  <input
    ref={ref}
    {...p}
    className={`border-[#868585] border-2 bg-transparent rounded-md px-2 py-1 outline-none text-xl 
    placeholder:text-[#000000] text-black hover:shadow-[10px_8px_18px_4px_#50505048] 
    duration-200 focus:shadow-[0_0px_18px_4px_#3d3d3d4c] ${p.className}`}
  />
));

OInput.displayName = "OInput";

export default OInput;
