import React, { useState } from 'react';


function Calculate() {
  const [display, setDisplay] = useState('0');

  const handleClear = () => {
    setDisplay('0');
  };
  const handleDelete =()=>{
    setDisplay(display.slice(0, -1));
  }

  const handleInput = (input) => {
    if (display === '0') {
      setDisplay(input);
    } else {
      setDisplay(display + input);
    }
  };

  console.log("Outside",display, "type",typeof display);


  const handleCalculate = () => {
  try {
   setDisplay((eval(display)).toString());
  } catch(error) {
  setDisplay("Error")  
}
   
};
  return (
    <div className="container">
      <div className="result">
        <div className="display">{display}</div>
      </div>
      <div className="keypad">
        <button className="clear operator" onClick={handleClear}>AC</button>
        <button className="DEL operator" onClick={handleDelete}>DEL</button>
        <button className="operator" onClick={() => handleInput('/')}>/</button>
        <button className="number" onClick={() => handleInput('7')}>7</button>
        <button className="number" onClick={() => handleInput('8')}>8</button>
        <button className="number" onClick={() => handleInput('9')}>9</button>
        <button className="operator" onClick={() => handleInput('*')}>*</button>
        <button className="number" onClick={() => handleInput('4')}>4</button>
        <button className="number" onClick={() => handleInput('5')}>5</button>
        <button className="number" onClick={() => handleInput('6')}>6</button>
        <button className="operator" onClick={() => handleInput('-')}>-</button>
        <button className="number" onClick={() => handleInput('1')}>1</button>
        <button className="number" onClick={() => handleInput('2')}>2</button>
        <button className="number" onClick={() => handleInput('3')}>3</button>
        <button className="operator" onClick={() => handleInput('+')}>+</button>
        <button className="number decimal" onClick={() => handleInput('.')}>.</button>
        <button className="number" onClick={() => handleInput('0')}>0</button>
        <button className="equal operator" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}
export default Calculate;
