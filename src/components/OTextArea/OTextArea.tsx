import React from "react";

const OTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((p, ref) => (
  <textarea
    ref={ref}
    {...p}
    className={`border-[#868585] border-2 bg-transparent rounded-lg p-2 outline-none text-xl
    placeholder:text-black text-black hover:shadow-[0_0px_18px_4px_#3d3d3d4c] duration-200 focus:shadow-[0_0px_18px_4px_#3d3d3d4c] ${p.className}`}
  />
));

OTextArea.displayName = "OTextArea";

export default OTextArea;
