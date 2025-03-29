import Menu from "../Menu/Menu";
import "./Header.css";
import Brand from "./Brand";

const Header = () => {
  return (
    <header className="header">
      <Brand />
      <Menu
        data={[
          { id: 1, label: "Home", href: "/" },
          { id: 2, label: "About", href: "/about" },
          { id: 3, label: "Contact", href: "/contact" },
        ]}
      />
    </header>
  );
};

export default Header;
