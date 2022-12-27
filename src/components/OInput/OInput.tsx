import React from "react";

type Props = {
  label: string;
};
const OInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(({ label, ...p }, ref) => (
  <>
    <label className="text-[#000000c9] text-lg mt-3" htmlFor={p.name}>
      {label}
    </label>
    <input
      id={p.name}
      ref={ref}
      {...p}
      className={`border-2 bg-white rounded-md px-4 py-1 outline-none text-lg font-figtree
    placeholder:text-[#6b6b6b] text-black shadow-[0px_0px_18px_4px_#bebebe1f] border-none 
    duration-200 ${p.className}`}
    />
  </>
));

OInput.displayName = "OInput";

export default OInput;
