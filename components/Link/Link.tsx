import NextLink from "next/link";
import IconButton from "@mui/material/IconButton";

export { Link };

function Link({ href, children, ...props }: any) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

export default Link;
