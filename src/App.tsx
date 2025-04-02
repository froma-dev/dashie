import "./App.css";
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import DraggableGrid from "./components/Grid/DraggableGrid";
import { type DraggableCardProps } from "./components/Card/DraggableCard";
import Header from "./components/Header/Header";
import HeroCarousel, { HeroProps } from "./components/Hero/HeroCarousel";

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

function App() {
  return (
    <>
      <Header />
      <progress value={0.5} />
      <HeroCarousel data={heros} />
      <Card id={"card-9"} title="Card title" description="Card description" />
      <Link href="https://github.com/">Link</Link>
      <DraggableGrid data={cards} auto />
    </>
  );
}

export default App;
