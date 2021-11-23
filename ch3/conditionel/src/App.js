import "./App.css";
import "./source-css.css";


function Card(props) {
  return (
    <div className="contact-card">
      <img alt="" src={props.img} />
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.mail}</p>
    </div>
  );
}

export default function App() {
  const hrs = new Date().getHours();
  let msg;
  let x;
  if (hrs < 12) {
    msg = "Bonjour";
    x = "#04567F";
  } else if (hrs < 18) {
    msg = "Bonne apres midi";
    x = "#0914A3";
  } else if (hrs < 24) {
    msg = "Bonne nuit";
    x = "#D90000";
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <p style={{ color: x, fontSize: 100 }}>{msg}</p>
      </header>
     
      <div className="contacts">
        <Card img="http://placekitten.com/300/200" name="Mr. Whiskerson" phone="(212) 555-1234" mail="mr.whiskaz@catnap.meow" />
        <Card img="http://placekitten.com/300/200" name="Mr. Whiskerson" phone="(212) 555-1234" mail="mr.whiskaz@catnap.meow" />
        <Card img="http://placekitten.com/300/200" name="Mr. Whiskerson" phone="(212) 555-1234" mail="mr.whiskaz@catnap.meow" />
      </div>
    </div>
  );
}

function CaseCocher() {
  return (
    <div className="css-liste">
      <div className="css-object">
        <label>Cocher la bonne réponse</label>
        <input type="checkbox" />
      </div>
    </div>
  );
}

export { CaseCocher };
