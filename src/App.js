import React, { useState } from "react";
import "./style.css";
import Table from "./Table";
import Time from "./Time";

function App() {
  const [run, setRun] = useState(true);
  const [number, setNumber] = useState(0);

  return (
    <>
      <Time run={run} number={number} setNumber={setNumber} />
      <Table setRun={setRun} setNumber={setNumber} number={number} />
    </>
  );
}

export default App;
