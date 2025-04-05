import { classNamesBuilder } from "../../utils/utils";
import "./BulletIndicator.css";

interface BulletIndicatorProps {
  className?: string;
}

const BulletIndicator = ({ className = "" }: BulletIndicatorProps) => {
  const classNames = classNamesBuilder("bullet-indicator", className);

  return <div className={classNames}></div>;
};

export default BulletIndicator;
