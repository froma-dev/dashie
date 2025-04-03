import { classNamesBuilder } from "../../utils/utils";
import CarouselItem, { type CarouselItemProps } from "./CarouselItem";
import "./Carousel.css";
import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  data: CarouselItemProps[];
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Carousel = ({ className = "", data, title }: CarouselProps) => {
  const classNames = classNamesBuilder("carousel", className);
  const refCarouselContent = useRef<HTMLDivElement>(null);
  const [carouselComputedValues, setCarouselComputedValues] = useState({
    carouselStripWidth: 0,
    carouselItemWidth: 0,
  });
  const [carouselStripPosition, setCarouselStripPosition] = useState(0);

  const handleCarouselStripPosition = () => {
    setCarouselStripPosition((prev) => {
      const newValue = prev + carouselComputedValues.carouselItemWidth;
      if (refCarouselContent.current)
        refCarouselContent.current.style.transform = `translateX(-${newValue}px)`;
      return newValue;
    });
  };

  const handleCarouselStripPositionBack = () => {
    setCarouselStripPosition((prev) => {
      const newValue = prev - carouselComputedValues.carouselItemWidth;
      if (refCarouselContent.current)
        refCarouselContent.current.style.transform = `translateX(-${newValue}px)`;
      return newValue;
    });
  };

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setCarouselComputedValues((prev) => ({
        ...prev,
        carouselStripWidth: entry.contentRect.width,
        carouselItemWidth: entry.contentRect.width / data.length,
      }));
    });

    if (refCarouselContent.current)
      observer.observe(refCarouselContent.current);

    return () => observer.disconnect();
  }, [refCarouselContent, data]);

  console.log(carouselComputedValues);

  return (
    <div className={classNames}>
      {title && <h2 className="carousel__title">{title}</h2>}
      <div
        className="carousel__content"
        ref={refCarouselContent}
        style={{ transform: `translateX(-${carouselStripPosition}px)` }}
      >
        {data.map((carouselItem) => (
          <CarouselItem key={carouselItem.id} {...carouselItem} />
        ))}
      </div>
      <button onClick={handleCarouselStripPosition}>Next</button>
      <button onClick={handleCarouselStripPositionBack}>Previous</button>
    </div>
  );
};

export default Carousel;
export { type CarouselProps, type CarouselItemProps };
