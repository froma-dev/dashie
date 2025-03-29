import "./App.css";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <h1>Dashie</h1>
      <Card
        title="Card title"
        description="Card description"
        footer="Card footer"
      />
      <Button>Button</Button>
    </>
  );
}

export default App;
