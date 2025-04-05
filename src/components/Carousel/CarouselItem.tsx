import "./CarouselItem.css";

interface CarouselItemProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  style?: React.CSSProperties;
}

const CarouselItem = ({
  title,
  description,
  image,
  style,
}: CarouselItemProps) => {
  return (
    <div className="carousel__item" style={style}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default CarouselItem;
export { type CarouselItemProps };
