import React from "react";
import CP from "../sounds/CP/CP.mp3";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sound: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.querySelector("audio").load();
    document.querySelector("audio").play();
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <h1>Roland 808 Samples</h1>
          <p className="credit">
            Based on{" "}
            <a href="http://smd-records.com/tr808/?page_id=14" target="_blank">
              samples
            </a>{" "}
            made by Michael Fischer
          </p>
          <button onClick={this.handleClick}>Hand Clap</button>
          <audio
            controls
            src={CP}
            type="audio/mpeg"
            style={{ display: "none" }}
          ></audio>
        </div>
      </div>
    );
  }
}
