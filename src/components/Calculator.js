import React from "react";
var numeral = require('numeral');
const Calculator = () => {
  const [entry, setEntry] = React.useState(0);
  const [target1, setTarget1] = React.useState(0);
  const [target2, setTarget2] = React.useState(0);
  const [money, setMoney] = React.useState(0);
  const [result1, setResult1] = React.useState(0);
  const [result2, setResult2] = React.useState(0);
  const [profit1, setProfit1] = React.useState(0);
  console.log('profit1: ', profit1);
  const [profit2, setProfit2] = React.useState(0);
  console.log('profit2: ', profit2);
  const [withdrawalValue1, setWithdrawalValue1] = React.useState(0);
  const [withdrawalValue2, setWithdrawalValue2] = React.useState(0);
  const handleCalc = () => {
    if (entry && target1 && target2 && money) {
      if (money >= 10) {
        setResult1((money * target1) / entry);
        setResult2((money * target2) / entry);
        setProfit1((money * target1) / entry - money)
        setProfit2((money * target2) / entry - money)
        setWithdrawalValue1((money * target1) / entry - 10 )
        setWithdrawalValue2((money * target2) / entry - 10 )
      } else alert("Please enter more than 10$ ");
    }
  };
  return (
    <div className="content">
      <div className="calculator">
        <div className="calculator-item">
          <label className="input" >
            <p className="title">Entry</p>
            <input
              type="number"
              className="input-focus"
              placeholder="Entry"
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
            />
          </label>
          <label className="input" >
            <p className="title">Target 1</p>
            <input
              type="number"
              className="input-focus"
              placeholder="Target 1"
              value={target1}
              onChange={(e) => setTarget1(e.target.value)}
            />
          </label>

          <label className="input" >
            <p className="title">Target 2</p>
            <input
              type="number"
              className="input-focus"
              placeholder="Target 2"
              value={target2}
              onChange={(e) => setTarget2(e.target.value)}
            />
          </label>
        </div>
        <div className="calculator-item">
          <label className="input" >
            <p className="title">Money</p>
            <input
              type="number"
              className="input-focus"
              placeholder="Money"
              value={money}
              onChange={(e) => setMoney(e.target.value)}
            />
          </label>
          <label className="input" >
            <p className="title">Result 2</p>
            <input
              type="number"
              className="input-focus"
              placeholder="Result 1"
              value={numeral(result1).format('0.0')}
            />
          </label>
          <label className="input" >
            <p className="title">Result 2</p>
            <input
              type="number"
              className="input-focus"
              placeholder="Result 2"
              value={numeral(result2).format('0.0')}
            />
          </label>
        </div>
      </div>
      <div className="btn btn-calc" onClick={handleCalc}>
        Calculator
      </div>
      <div className='result'>
        <p className="title">Profit 1: {numeral(profit1).format('0.0')} $</p>
        <p className="title">Withdrawal Value 1: {numeral(withdrawalValue1).format('0.0')} $</p>
        <p className="title">Profit 2: {numeral(profit2).format('0.0')} $</p>
        <p className="title">Withdrawal Value 2: {numeral(withdrawalValue2).format('0.0')} $</p>
      </div>
    </div>
  );
};

export default Calculator;
