import "./CarouselItem.css";

interface CarouselItemProps {
  id: string;
  title: string;
  description?: string;
  image: string;
}

const CarouselItem = ({ id, title, description, image }: CarouselItemProps) => {
  return (
    <div className="carousel__item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default CarouselItem;
export { type CarouselItemProps };
