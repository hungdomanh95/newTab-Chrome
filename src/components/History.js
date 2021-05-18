import React, { useEffect, useState } from "react";

const History = () => {
  const [list, setList] = useState([]);
  const [name, setName] = React.useState("");
  const [entry, setEntry] = React.useState(0);
  const [target1, setTarget1] = React.useState(0);
  const [target2, setTarget2] = React.useState(0);
  const [money, setMoney] = React.useState(0);
  const [valueBuy, setValueBuy] = React.useState(0);
  console.log("list: ", list);
  useEffect(() => {
    var arrayLocal = JSON.parse(localStorage.getItem("array")) || []
    setList(arrayLocal);
  }, []);
  const handleAddNew = () => {
    setList([...list,{name,entry,target1,target2,money,valueBuy}])
    var array = JSON.parse(localStorage.getItem("array")) || [];
    array.push({name,entry,target1,target2,money,valueBuy})
    localStorage.setItem("array", JSON.stringify(array));
  }
  return (
    <div className="content">
      <div className="history">
        <div className='table-addNew'>
          <div className="list-addNew">
            <label className='add-item'>
              <p className="title-input" >Name</p>
              <input
                type="text"
                className="input-focus"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className='add-item'>
              <p className="title-input" >Entry</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Entry"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </label>
            <label className='add-item'>
              <p className="title-input" >Target 1</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Target 1"
                value={target1}
                onChange={(e) => setTarget1(e.target.value)}
              />
            </label>
            <label className='add-item'>
              <p className="title-input" >Target 2</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Target 2"
                value={target2}
                onChange={(e) => setTarget2(e.target.value)}
              />
            </label>
            <label className='add-item'>
              <p className="title-input" >Money</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Money"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </label>
            <label className='add-item'>
              <p className="title-input" >Value Buy</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Value Buy"
                value={valueBuy}
                onChange={(e) => setValueBuy(e.target.value)}
              />
            </label>
          </div>
          <div className='btn btn-addNew' onClick={handleAddNew}>Add New</div>
        </div>
        <table>
          <tr>
            <th className='tilte-table'>Name</th>
            <th className='tilte-table'>Entry</th>
            <th className='tilte-table'>Target 1</th>
            <th className='tilte-table'>Target 2</th>
            <th className='tilte-table'>Money</th>
            <th className='tilte-table'>Value Buy</th>
          </tr>
          {list.length > 0 &&
          list.map((item, index) => {
            return (
              <tr key={index}>
                <td className='item-name' >{item.name}/USDT</td>
                <td className='item-name' >{item.entry}$</td>
                <td className='item-name' >{item.target1}$</td>
                <td className='item-name' >{item.target2}$</td>
                <td className='item-name' >{item.money}$</td>
                <td className='item-name' >{item.valueBuy}$</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default History;
