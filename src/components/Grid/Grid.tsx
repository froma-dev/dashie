import "./Grid.css";

interface GridProps {
  children: React.ReactNode;
  auto?: boolean;
}

const Grid = ({ children, auto = false }: GridProps) => {
  const gridClassName = `grid ${auto ? "auto" : ""}`;

  return <section className={gridClassName}>{children}</section>;
};

export default Grid;
