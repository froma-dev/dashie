import { classNamesBuilder } from "../../utils/utils";
import { type CarouselItemProps } from "./CarouselItem";
import "./Carousel.css";

interface CarouselProps {
  data: CarouselItemProps[];
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Carousel = ({ className = "", children, title }: CarouselProps) => {
  return (
    <div className={classNamesBuilder("carousel", className)}>
      {title && <h2 className="carousel__title">{title}</h2>}
      <div className="carousel__content">{children}</div>
    </div>
  );
};

export default Carousel;
export { type CarouselProps, type CarouselItemProps };
