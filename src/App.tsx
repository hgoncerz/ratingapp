import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./sass/app.scss";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";

function App() {
  const [chosenNumber, setChosenNumber] = useState<number>();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                chosenNumber={chosenNumber}
                setChosenNumber={setChosenNumber}
              />
            }
          />
          <Route
            path="result"
            element={<ResultPage chosenNumber={chosenNumber} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
