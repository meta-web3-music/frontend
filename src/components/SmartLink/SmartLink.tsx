import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import classNames from "classnames";
type Props = {
  activeClass?: string;
  href: string;
  subHref?: string;
};
export const SmartLink: React.FC<React.PropsWithChildren & Props> = ({
  href,
  activeClass,
  subHref,
  ...p
}) => {
  const { pathname } = useRouter();

  const finalHref = subHref ? href + subHref : href;
  return (
    <Link href={finalHref}>
      {
        React.Children.map(p.children, (e) => {
          const reactPortalEle = e as React.ReactPortal;
          let _className = classNames(
            reactPortalEle.props.className,
            "cursor-pointer"
          );
          pathname.startsWith(href)
            ? (_className = classNames(_className, activeClass))
            : null;
          return React.cloneElement(e as React.ReactElement, {
            className: _className,
          });
        })?.[0]
      }
    </Link>
  );
};
