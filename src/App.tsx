import React, { useState } from "react";
import "./sass/app.scss";
import Home from "./components/Home";

function App() {
  const [chosenNumber, setChosenNumber] = useState<number>();
  return (
    <div className="App">
      <Home chosenNumber={chosenNumber} setChosenNumber={setChosenNumber} />
    </div>
  );
}

export default App;
