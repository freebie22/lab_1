import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Task1></Task1>
      <Task2></Task2>
      <Task3></Task3>
      <Task4></Task4>
      <Task5></Task5>
      <Task6></Task6>
    </Fragment>
  );
}

export default App;
