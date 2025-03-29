import "./App.css";
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";

function App() {
  return (
    <>
      <h1>Dashie</h1>
      <Card title="Card title" description="Card description" />
      <Link href="https://github.com/">Link</Link>
    </>
  );
}

export default App;
