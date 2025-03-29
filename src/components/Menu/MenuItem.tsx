interface LinkProps {
  href: string;
  label: string;
  current?: boolean;
}

const MenuItem = ({ href, label = "nav item", current }: LinkProps) => {
  return (
    <a
      className="menu-item"
      href={href}
      aria-label={label}
      aria-current={current ? "page" : undefined}
    >
      {label}
    </a>
  );
};

export default MenuItem;
