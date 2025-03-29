import "./App.css";
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import Grid from "./components/Grid/Grid";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Card title="Card title" description="Card description" />
      <Link href="https://github.com/">Link</Link>
      <Grid auto>
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
        <Card title="Card title" description="Card description" />
      </Grid>
    </>
  );
}

export default App;
