import React, { useEffect, useState } from "react";
import './css/App.css';
import './css/reset.css';
import Calculator from './components/Calculator';
import History from './components/History';
function App() {
  const array =[
    {
      name:"NANO",
      entry:12,
      target1:15,
      target2:17,
      money:null,
      valueBuy:null
    },
    {
      name:"DOT",
      entry:40,
      target1:50,
      target2:60,
      money:null,
      valueBuy:null
    },
  ]
  useEffect(() => {
    // localStorage.setItem("array", JSON.stringify(array));
  }, [])
  return (
    <div className="App">
      <Calculator/>
      <History/>
    </div>
  );
}

export default App;
