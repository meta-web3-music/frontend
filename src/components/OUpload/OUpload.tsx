import React, { useEffect, useRef, useState } from "react";
import OButton from "../OButton/OButton";

type Props = {
  buttonText: string;
  label: string;
  info?: string;
};
const OUpload = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(({ buttonText, className, label, info, ...p }, ref) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>();

  useEffect(() => {
    fileRef.current?.addEventListener("change", (f) =>
      setFileName((f.target as HTMLInputElement)?.files?.[0].name)
    );
  }, []);
  return (
    <div>
      <label
        className="text-[#000000c9] dark:text-white text-lg"
        htmlFor={p.name}
      >
        {label}
      </label>
      <OButton
        color="yellow"
        btnType="fill"
        onClick={() => {
          fileRef.current?.click();
        }}
        className={`mt-1 z-10 relative w-full ${className}`}
      >
        {fileName ? (
          <p className="m-0 text-ellipsis whitespace-nowrap overflow-hidden">
            {fileName}
          </p>
        ) : (
          <p className="m-0">{buttonText}</p>
        )}
      </OButton>
      {info && <p className="text-[#0000007c] dark:text-white mt-2">{info}</p>}
      <input
        ref={(node) => {
          fileRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        type="file"
        className="opacity-0 -translate-y-3/4 -z-10 relative"
        {...p}
      />
      <div className="-mt-5"></div>
    </div>
  );
});

OUpload.displayName = "OUpload";

export default OUpload;
