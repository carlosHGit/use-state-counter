import React, { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (operation = "add") => {
    if (operation === "add") {
      return setCounter(counter + 1);
    }

    return setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="contador-container">
        <div className="contador-title">
          Counter: {counter} <br />
        </div>
        <div className="container-buttons">
          <button onClick={() => handleCounter("add")}>+ Add</button>
          <button onClick={() => handleCounter("subtract")}>- Subtract</button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
