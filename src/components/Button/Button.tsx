import { classNamesBuilder } from "../../utils/utils";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    const classNames = classNamesBuilder("button", className);

  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
