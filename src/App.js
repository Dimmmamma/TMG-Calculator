import React from "react";
import Material from "./images/materialgirl.png";
import { useState, useEffect } from "react";

export default function App() {
  const [prevState, setPrevState] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [inputs, setInputs] = useState("0");
  const [operands, setOperands] = useState(null);
  const [Final, setFinal] = useState(false);

  const input = (i) => {
    if (Final) {
      setPrevState("");
    }

    currentState
      ? setCurrentState((pre) => pre + i.target.innerText)
      : setCurrentState(i.target.innerText);
    setFinal(false);
  };

  useEffect(() => {
    setInputs(currentState);
  }, [currentState]);

  useEffect(() => {
    setInputs("0");
  }, []);

  const operand = (i) => {
    setFinal(false);
    setOperands(i.target.innerText);
    if (currentState === "") return;
    if (prevState !== "") {
      equality();
    }
    setPrevState(currentState);
    setCurrentState("");
  };

  const equality = (i) => {
    if (i?.target.innerText === "=") setFinal(true);
  };

  let calc;
  switch (operands) {
    case "/":
      calc = String(parseFloat(prevState) / parseFloat(currentState));

      break;

    case "X":
      calc = String(parseFloat(prevState) * parseFloat(currentState));
      break;

    case "+":
      calc = String(parseFloat(prevState) + parseFloat(currentState));
      break;

    case "-":
      calc = String(parseFloat(prevState) - parseFloat(currentState));
      break;

    default:
    //   return
  }

  //setInputs("")
  //setPrevState(calc)
  //setCurrentState("")

  const reset = () => {
    setPrevState("");
    setCurrentState("");
    setInputs("0");
  };

  const eliminate = () => {
    setPrevState("");
    setCurrentState("");
    setInputs("0");
  };

  return (
    <div>
      <h1>The Material Gworl Calculator</h1>

      <div className="flex">
        <div className="grid">
          <div className="output-plane">
            <div className="previous">50</div>
            <div className="current">{inputs}</div>
          </div>
          <button className="two-places" onClick={reset}>
            AC
          </button>
          <button onClick={eliminate}>DEL</button>
          <button onClick={operand}>&divide;</button>
          <button onClick={input}>7</button>
          <button onClick={input}>8</button>
          <button onClick={input}>9</button>
          <button onClick={operand}>X</button>
          <button onClick={input}>4</button>
          <button onClick={input}>5</button>
          <button onClick={input}>6</button>
          <button onClick={operand}>-</button>
          <button onClick={input}>1</button>
          <button onClick={input}>2</button>
          <button onClick={input}>3</button>
          <button onClick={operand}>+</button>
          <button className="two-places">Material Girl</button>
          <button onClick={input}>0</button>
          <button onClick={equality}>=</button>
        </div>

        <img src={Material} alt="Material Gowrl" className="material-babe" />
      </div>
    </div>
  );
}
