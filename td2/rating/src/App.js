import "./App.css";
import React from "react";

class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    /* this.state.on ?
    this.setState({on:false}):
    this.setState({on:true});*/
    this.setState({ on: !this.state.on });
  }
  render() {
    return (
      <img
        alt="star"
        src={
          this.state.on
            ? process.env.PUBLIC_URL + "./star_on.png"
            : process.env.PUBLIC_URL + "./star_off.png"
        }
        onClick={this.handleClick}
      />
    );
  }
}

function App() {
  return (
    <div className="img-container">
      <h3>donne ton avis</h3>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

export default App;
