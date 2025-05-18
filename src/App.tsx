import "./App.css";
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import DraggableGrid from "./components/Grid/DraggableGrid";
import { type DraggableCardProps } from "./components/Card/DraggableCard";
import Header from "./components/Header/Header";
import HeroCarousel, { type HeroProps } from "./components/Hero/HeroCarousel";
import Carousel, { CarouselItemProps } from "./components/Carousel/Carousel";

const cards = [
  { id: "card-1", title: "Card", description: "Card description" },
  { id: "card-2", title: "Card", description: "Card description" },
  { id: "card-3", title: "Card", description: "Card description" },
  { id: "card-4", title: "Card", description: "Card description" },
  { id: "card-5", title: "Card", description: "Card description" },
  { id: "card-6", title: "Card", description: "Card description" },
  { id: "card-7", title: "Card", description: "Card description" },
  { id: "card-8", title: "Card", description: "Card description" },
] as DraggableCardProps[];

const heros = [
  {
    id: "hero-1",
    title: "Hero 1",
    description: "Hero description paragraph",
    image: "/hero-bg.webp",
  },
  {
    id: "hero-2",
    title: "Hero 2",
    description: "Hero description paragraph 2",
    image: "/hero-bg-1.webp",
  },
  {
    id: "hero-3",
    title: "Hero 3",
    description: "Hero description paragraph 3",
    image: "/hero-bg-2.webp",
  },
] as HeroProps[];

const carouselItems = [
  {
    id: "carousel-1",
    title: "Carousel 1",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=1",
  },
  {
    id: "carousel-2",
    title: "Carousel 2",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=2",
  },
  {
    id: "carousel-3",
    title: "Carousel 3",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=3",
  },
  {
    id: "carousel-4",
    title: "Carousel 4",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=4",
  },
  {
    id: "carousel-5",
    title: "Carousel 5",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=5",
  },
  {
    id: "carousel-6",
    title: "Carousel 6",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=6",
  },
  {
    id: "carousel-7",
    title: "Carousel 7",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=7",
  },
  {
    id: "carousel-8",
    title: "Carousel 8",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=8",
  },
  {
    id: "carousel-9",
    title: "Carousel 9",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=9",
  },
  {
    id: "carousel-10",
    title: "Carousel 10",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=10",
  },
  {
    id: "carousel-11",
    title: "Carousel 11",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=11",
  },
  {
    id: "carousel-12",
    title: "Carousel 12",
    description: "Carousel description",
    image: "https://picsum.photos/600/480?random=12",
  },
] as CarouselItemProps[];

function App() {
  return (
    <>
      <Header />
      <Carousel
        data={carouselItems}
        config={{ interactiveItems: 3 }}
        title="Carousel"
      />
      <HeroCarousel data={heros} />
      <Card id={"card-9"} title="Card title" description="Card description" />
      <Link href="https://github.com/">Link</Link>
      <DraggableGrid data={cards} auto />
    </>
  );
}

export default App;
