import React from "react";

type Props = {
  label: string;
};
const OTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props
>(({ label, ...p }, ref) => (
  <>
    <label className="text-[#000000c9] text-lg mt-3" htmlFor={p.name}>
      {label}
    </label>
    <textarea
      id={p.name}
      ref={ref}
      {...p}
      className={`bg-white border-none rounded-lg p-2 outline-none text-xl
    placeholder:text-[#6b6b6b] text-black shadow-[0px_0px_18px_4px_#bebebe1f] duration-200 ${p.className}`}
    />
  </>
));

OTextArea.displayName = "OTextArea";

export default OTextArea;
