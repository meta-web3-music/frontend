"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  buttonText: string;
  label: string;
  info?: string;
};
const OUpload = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(
  (
    {
      buttonText,
      //TODO, this was used by some components to add styles for old upload button, now we have new ui, not sure how it will look on new ui
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      className,
      label,
      info,
      ...p
    },
    ref
  ) => {
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
        <div
          className="w-full h-28 border-2 border-dashed flex justify-center items-center rounded-lg text-[#BFB00D] z-10 mt-1"
          onClick={() => {
            fileRef.current?.click();
          }}
        >
          <p>{fileName ? fileName : buttonText}</p>
        </div>

        {info && (
          <p className="text-[#0000007c] dark:text-white mt-2">{info}</p>
        )}
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
  }
);

OUpload.displayName = "OUpload";

export default OUpload;
