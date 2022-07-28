import React from "react";
import './App.css';
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updatecalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }

  }

  function equals() {
    setCalc(eval(calc).toString());

  }

  function deletelast() {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }
  const c = () =>{
    window.location.reload();
  }

  return (
    <div className="app">
      <div className="calc">
        <div className="display">
          {result ? <span>({result})</span> : ''} {calc || "0"}
        </div>
        <div className="body">

          <button className="operator"  onClick={c}>C</button>
          <button className="operator" onClick={() => updatecalc('%')} >%</button>
          <button className="operator" onClick={() => updatecalc('/')}>/</button>
          <button className="operator" onClick={deletelast}>Del</button>





          <button onClick={() => updatecalc('7')}>7</button>
          <button onClick={() => updatecalc('8')}>8</button>
          <button onClick={() => updatecalc('9')}>9</button>
          <button className="operator" onClick={() => updatecalc('*')}>x</button>
          <button onClick={() => updatecalc('4')}>4</button>
          <button onClick={() => updatecalc('5')}>5</button>
          <button onClick={() => updatecalc('6')}>6</button>
          <button className="operator" onClick={() => updatecalc('-')}>-</button>
          <button onClick={() => updatecalc('1')}>1</button>
          <button onClick={() => updatecalc('2')}>2</button>
          <button onClick={() => updatecalc('3')}>3</button>
          <button className="operator" onClick={() => updatecalc('/')}>/</button>
          <button onClick={() => updatecalc('0')}>0</button>
          <button onClick={() => updatecalc('.')}>.</button>
          <button className="equals" onClick={equals} >=</button>



        </div >

      </div >
    </div >
  );
}

export default App;
