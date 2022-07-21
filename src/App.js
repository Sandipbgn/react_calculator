import React from "react";
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="calc">
        <div className="display">
          <span>(0)</span> 0
        </div>
<div className="body">

  <button className="operator" >C</button>
 <button className="operator" >%</button>
 <button className="operator" >/</button>
 <button className="operator" >Del</button>

  



  <button>7</button>
  <button>8</button>
  <button>9</button>
  <button className="operator">x</button>
  <button>4</button>
  <button>5</button>
  <button>6</button>
  <button className="operator">-</button>
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button className="operator">/</button>
  <button>0</button>
  <button>.</button>
  <button className="equals">=</button>



</div>

      </div>
    </div>
  );
}

export default App;
