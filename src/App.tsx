import "./App.css";
import { Card } from "./components/Card";
import sands from "./assets/images/sands.webp";
import { Button } from "./components/Button";
import { Row } from "./common/ui/Row";

function App() {
  return (
    <div className="App">
      <Card title="Headline" coverUrl={sands}>
        <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
        <Row>
          <Button>See more</Button>
          <Button variant="outlined">Save</Button>
        </Row>
      </Card>
    </div>
  );
}

export default App;
