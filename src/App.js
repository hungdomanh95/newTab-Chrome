import React from "react";
import './css/App.css';
import './css/reset.css';
import Calculator from './components/Calculator';
import History from './components/History';
import Shortcuts from "./components/Shortcuts";
function App() {
  return (
    <div className="App">
      <div className="binance">
        <Calculator/>
        <History/>
      </div>
      <Shortcuts/>
    </div>
  );
}

export default App;
