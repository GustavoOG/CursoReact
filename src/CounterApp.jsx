import React, { useState } from "react";
import Proptypes from "prop-types";

export const CounterApp = ({ value }) => {

  console.log('render');
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    //console.log(event);
    setCounter(counter + 1);
    //setCounter((c) => c + 1);
  };

  const handlerSubstract = () => setCounter(counter - 1);
  const handlerReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handlerSubstract}>-1</button>
      <button aria-label="btn-reset" onClick={handlerReset}>Reset</button>
    </>
  );
};

CounterApp.prototype = {
  value: Proptypes.number.isRequired,
};
