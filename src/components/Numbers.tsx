import React, { useState } from "react";
import "../sass/homesass/numbers.scss";

const numbers: number[] = [1, 2, 3, 4, 5];
const [chosenNumber, setChosenNumber] = useState<number>(5);

const Numbers = () => {
  return (
    <div className="container">
      {numbers.map((number, index) => (
        <div className="container__numbers" key={index}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default Numbers;
