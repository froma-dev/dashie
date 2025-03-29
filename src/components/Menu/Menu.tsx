import MenuItem from "./MenuItem";
import "./Menu.css";

interface MenuProps {
  data: {
    id: number;
    label: string;
    href: string;
    current?: boolean;
  }[];
}

const Menu = ({ data }: MenuProps) => {
  return (
    <nav className="menu">
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <MenuItem href={item.href} label={item.label} current={item.current}/>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
