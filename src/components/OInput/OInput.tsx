import React from "react";

type Props = {
  label: string;
  type: "outline" | "fill";
};
const OInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(({ label, type, ...p }, ref) => (
  <>
    <label
      className="text-[#000000c9] dark:text-white text-lg mt-3"
      htmlFor={p.name}
    >
      {label}
    </label>
    <input
      id={p.name}
      ref={ref}
      {...p}
      className={`border-2  rounded-md px-4 py-2 outline-none text-lg font-figtree
    placeholder:text-[#6b6b6b] text-black 
    duration-200 ${p.className} ${
        type == "outline"
          ? "border-2 border-[#00000014] bg-transparent"
          : "border-none shadow-[0px_0px_18px_4px_#bebebe1f] bg-white"
      }`}
    />
  </>
));

OInput.displayName = "OInput";

export default OInput;
