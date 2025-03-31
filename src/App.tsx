import "./App.css";
import Card from "./components/Card/Card";
import DraggableCard from "./components/Card/DraggableCard";
import Link from "./components/Link/Link";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const cards = [
  { id: 1, title: "Card", description: "Card description" },
  { id: 2, title: "Card", description: "Card description" },
  { id: 3, title: "Card", description: "Card description" },
  { id: 4, title: "Card", description: "Card description" },
  { id: 5, title: "Card", description: "Card description" },
  { id: 6, title: "Card", description: "Card description" },
  { id: 7, title: "Card", description: "Card description" },
  { id: 8, title: "Card", description: "Card description" },
];

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Hero"
        description="Hero description paragraph"
        image="/hero-bg.webp"
      />
      <Card title="Card title" description="Card description" />
      <Link href="https://github.com/">Link</Link>
      <Grid auto>
        {cards.map((card) => (
          <DraggableCard
            key={card.id}
            title={`${card.title} ${card.id}`}
            description={`${card.description}`}
          />
        ))}
      </Grid>
    </>
  );
}

export default App;
