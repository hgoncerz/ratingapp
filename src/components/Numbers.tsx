import React, { useState } from "react";
import "../sass/homesass/numbers.scss";

import { Props } from "../pages/Home";

const Numbers: React.FC<Props> = ({ chosenNumber, setChosenNumber }) => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      {numbers.map((number, index) => (
        <div className="" key={index} onClick={() => setChosenNumber(number)}>
          {number === chosenNumber ? (
            <div className="container__numbers__chosen">{number}</div>
          ) : (
            <div className="container__numbers">{number}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
