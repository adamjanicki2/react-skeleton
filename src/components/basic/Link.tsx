import { forwardRef } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import "src/components/basic/link.css";

type DefaultLinkProps = LinkProps & {
  unstyled?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, DefaultLinkProps>(
  ({ className = "", unstyled, ...props }, ref) => {
    const linkClass = `${unstyled ? "" : "link "} ${className}`;
    return <RouterLink {...props} ref={ref} className={linkClass} />;
  }
);

export default Link;
