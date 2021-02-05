import React, { Component } from "react";
import { render } from "react-dom";
import Illustration from "./Illustration";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Illustration />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
