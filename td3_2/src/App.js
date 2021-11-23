import { donnees } from "./Data"; //liste des hobbies
import Element from "./Components/Element";
import "./App.css";

function App() {
  const elements = donnees.map((item) => (
    <Element key={item.id} completed={item.completed} text={item.text} />
  ));

  return <div className="liste">{elements}</div>;
}

export default App;
