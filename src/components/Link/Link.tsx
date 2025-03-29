import "./Link.css";
import { IconExternalLink } from "@tabler/icons-react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  return (
    <a className="link" href={href}>
      {children} <IconExternalLink size={20} />
    </a>
  );
};

export default Link;
