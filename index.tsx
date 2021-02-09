import React, { Component } from "react";
import { render } from "react-dom";
import Illustration from "./Illustration";
import "./style.css";

const App = () => {
  return (
    <div>
      <h1>ilustração</h1>
      <Illustration />
    </div>
  );
};

render(<App />, document.getElementById("root"));
