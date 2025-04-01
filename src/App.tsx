import "./App.css";
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import DraggableGrid from "./components/Grid/DraggableGrid";
import { type DraggableCardProps } from "./components/Card/DraggableCard";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

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

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Hero"
        description="Hero description paragraph"
        image="/hero-bg.webp"
      />
      <Card id={1} title="Card title" description="Card description" />
      <Link href="https://github.com/">Link</Link>
      <DraggableGrid data={cards} auto />
    </>
  );
}

export default App;
