import React, { useEffect, useRef, useState } from "react";
import OButton from "../OButton/OButton";

type Props = {
  buttonText: string;
  iconifyIconName?: string;
};
const OUpload = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & Props
>(({ buttonText, className, iconifyIconName, ...rest }, ref) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>();

  useEffect(() => {
    fileRef.current?.addEventListener("change", (f) =>
      setFileName((f.target as HTMLInputElement)?.files?.[0].name)
    );
  }, []);
  return (
    <div className={className}>
      <OButton
        onClick={() => {
          fileRef.current?.click();
        }}
        className="z-10 relative"
      >
        {fileName ? (
          <p className="m-0 text-ellipsis whitespace-nowrap overflow-hidden">
            {fileName}
          </p>
        ) : (
          <>
            {iconifyIconName && (
              <span className="mr-2 text-2xl">
                <span className="iconify" data-icon={iconifyIconName}></span>
              </span>
            )}
            <p className="m-0">{buttonText}</p>
          </>
        )}
      </OButton>
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
        {...rest}
      />
      <div className="-mt-5"></div>
    </div>
  );
});

OUpload.displayName = "OUpload";

export default OUpload;
