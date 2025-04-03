import { classNamesBuilder } from "../../utils/utils";
import CarouselItem, { type CarouselItemProps } from "./CarouselItem";
import "./Carousel.css";
import { useEffect, useRef, useState } from "react";
import BasicNavigator, { Direction } from "../Navigator/BasicNavigator";

interface CarouselProps {
  data: CarouselItemProps[];
  title?: string;
  className?: string;
  children: React.ReactNode;
}
const ITEM_GAP_PX = 16;
const Carousel = ({ className = "", data, title }: CarouselProps) => {
  const classNames = classNamesBuilder("carousel", className);
  const refCarouselContent = useRef<HTMLDivElement>(null);
  const [carouselComputedValues, setCarouselComputedValues] = useState({
    carouselStripWidth: 0,
    carouselItemWidth: 0,
  });
  const [carouselStripPosition, setCarouselStripPosition] = useState(0);

  const handleCarouselStripPosition = (dir: Direction) => {
    if (dir === "previous") {
      setCarouselStripPosition((prev) => {
        const newValue = prev - carouselComputedValues.carouselItemWidth;
        if (newValue < 0) return 0;
        return newValue;
      });
    } else if (dir === "next") {
      setCarouselStripPosition((prev) => {
        const newValue = prev + carouselComputedValues.carouselItemWidth;
        if (newValue >= carouselComputedValues.carouselStripWidth) return prev;
        return newValue;
      });
    }
  };

  // Resize Observer
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setCarouselComputedValues((prev) => {
        const carouselItemWidth =
          entry.target.firstElementChild?.getBoundingClientRect().width || 0;
        const carouselItemWidthWithGap = carouselItemWidth + ITEM_GAP_PX;

        console.log("cc--->", carouselItemWidth);
        return {
          ...prev,
          carouselStripWidth: entry.contentRect.width,
          carouselItemWidth: carouselItemWidthWithGap,
        };
      });
    });

    if (refCarouselContent.current)
      observer.observe(refCarouselContent.current);

    return () => observer.disconnect();
  }, [refCarouselContent, data]);

  return (
    <div className={classNames}>
      <div className="carousel__header">
        {title && <h2 className="carousel__title">{title}</h2>}
        <BasicNavigator
          onClick={handleCarouselStripPosition}
          onKeyDown={handleCarouselStripPosition}
        />
      </div>
      <div
        className="carousel__content"
        ref={refCarouselContent}
        style={{ transform: `translateX(-${carouselStripPosition}px)` }}
      >
        {data.map((carouselItem) => (
          <CarouselItem key={carouselItem.id} {...carouselItem} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
export { type CarouselProps, type CarouselItemProps };
