import React, { Fragment, useEffect, useState } from "react";
import { iconRemove, iconEdit, iconCheck, iconRight } from "../assets";
const History = () => {
  const [list, setList] = useState([]);
  const [name, setName] = React.useState("");
  const [entry, setEntry] = React.useState(0);
  const [target1, setTarget1] = React.useState(0);
  const [target2, setTarget2] = React.useState(0);
  const [money, setMoney] = React.useState(0);
  const [valueBuy, setValueBuy] = React.useState(0);

  const [nameEdit, setNameEdit] = React.useState("");
  const [entryEdit, setEntryEdit] = React.useState(0);
  const [target1Edit, setTarget1Edit] = React.useState(0);
  const [target2Edit, setTarget2Edit] = React.useState(0);
  const [moneyEdit, setMoneyEdit] = React.useState(0);
  const [valueBuyEdit, setValueBuyEdit] = React.useState(0);

  const [statusPopup, setStatusPopup] = React.useState(undefined);
  useEffect(() => {
    var arrayLocal = JSON.parse(localStorage.getItem("array")) || [];
    setList(arrayLocal);
  }, []);
  const handleAddNew = () => {
    setList([...list, { name, entry, target1, target2, money, valueBuy }]);
    var array = JSON.parse(localStorage.getItem("array")) || [];
    array.push({ name, entry, target1, target2, money, valueBuy });
    localStorage.setItem("array", JSON.stringify(array));
  };
  const removeItem = (index) => {
    const newArray = list.filter((item, indexArray) => {
      return indexArray !== index;
    });
    setList(newArray);
    localStorage.removeItem("array");
    var array = JSON.parse(localStorage.getItem("array")) || [];
    array.push(...newArray);
    localStorage.setItem("array", JSON.stringify(array));
    setStatusPopup(undefined);
  };
  const handlePopup = (item, index, status, type) => {
    if (status) {
      setStatusPopup({ item: item, index: index, status: status, type: type });
      // setNameEdit(item.name)
    } else {
      setStatusPopup(undefined);
    }
  };
  const handleEdit = (index) => {
    const newArray = list.filter((item, indexArray) => {
      return indexArray !== index;
    });

    const newItem = {
      name: nameEdit,
      entry: entryEdit,
      target1: target1Edit,
      target2: target2Edit,
      money: moneyEdit,
      valueBuy: valueBuyEdit,
    };
    setList([...newArray,newItem]);
    localStorage.removeItem("array");
    var array = JSON.parse(localStorage.getItem("array")) || [];
    array.push(newItem, ...newArray);
    localStorage.setItem("array", JSON.stringify(array));
    setStatusPopup(undefined);
  };
  const confirm = () => {
    if (statusPopup.type === "REMOVE") {
      removeItem(statusPopup.index);
    } else {
      handleEdit(statusPopup.index);
    }
  };
  return (
    <div className="content">
      <div className="history">
        <div className="table-addNew">
          <div className="list-addNew">
            <label className="add-item">
              <p className="title-input">Name</p>
              <input
                type="text"
                className="input-focus"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="add-item">
              <p className="title-input">Entry</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Entry"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
              />
            </label>
            <label className="add-item">
              <p className="title-input">Target 1</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Target 1"
                value={target1}
                onChange={(e) => setTarget1(e.target.value)}
              />
            </label>
            <label className="add-item">
              <p className="title-input">Target 2</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Target 2"
                value={target2}
                onChange={(e) => setTarget2(e.target.value)}
              />
            </label>
            <label className="add-item">
              <p className="title-input">Money</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Money"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </label>
            <label className="add-item">
              <p className="title-input">Value Buy</p>
              <input
                type="number"
                className="input-focus"
                placeholder="Value Buy"
                value={valueBuy}
                onChange={(e) => setValueBuy(e.target.value)}
              />
            </label>
          </div>
          <div className="btn btn-addNew" onClick={handleAddNew}>
            Add New
          </div>
        </div>
        <table>
          <tr className="item-table">
            <th className="tilte-table">Name</th>
            <th className="tilte-table">Entry</th>
            <th className="tilte-table">Target 1</th>
            <th className="tilte-table">Target 2</th>
            <th className="tilte-table">Money</th>
            <th className="tilte-table">Value Buy</th>
            <th className="tilte-table">Action</th>
          </tr>
          {list.length > 0 &&
            list.map((item, index) => {
              return (
                <tr key={index} className="item-table">
                  <td className="item-name">{item.name}/USDT</td>
                  <td className="item-name">{item.entry}$</td>
                  <td className="item-name">{item.target1}$</td>
                  <td className="item-name">{item.target2}$</td>
                  <td className="item-name">{item.money}$</td>
                  <td className="item-name">{item.valueBuy}$</td>
                  <td className="item-name">
                    {statusPopup &&
                    statusPopup.status &&
                    statusPopup.index === index &&
                    statusPopup.type === "EDIT" ? (
                      <img
                        src={iconCheck}
                        alt="iconCheck"
                        className="item-image"
                      />
                    ) : (
                      <img
                        src={iconEdit}
                        alt="iconEdit"
                        className="item-image"
                        onClick={() => handlePopup(item, index, true, "EDIT")}
                      />
                    )}
                    <img
                      src={iconRemove}
                      alt="iconRemove"
                      className="item-image"
                      onClick={() => handlePopup(item, index, true, "REMOVE")}
                    />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
      {statusPopup && statusPopup.status && (
        <div className="overlayPopup">
          <div
            className={
              statusPopup.type === "REMOVE" ? "popup" : "popup popupEdit"
            }
          >
            <div className="contentPopup">
              {statusPopup.type === "REMOVE" ? (
                <p>Do you want remove item {statusPopup.item.name}/USDT ?</p>
              ) : (
                <Fragment>
                  <p>Do you want edit item {statusPopup.item.name}/USDT ?</p>
                  <div className="content-edit">
                    <label className="edit-item">
                      <p className="title-edit">NAME :</p>
                      <p className="title-edit">{statusPopup.item.name}</p>
                      <img
                        src={iconRight}
                        className="icon-right"
                        alt="iconRight"
                      />
                      <input
                        className="input-focus"
                        onChange={(e) => setNameEdit(e.target.value)}
                        value={nameEdit}
                      />
                    </label>
                    <label className="edit-item">
                      <p className="title-edit">ENTRY :</p>
                      <p className="title-edit">{statusPopup.item.entry}</p>
                      <img
                        src={iconRight}
                        className="icon-right"
                        alt="iconRight"
                      />
                      <input
                        className="input-focus"
                        onChange={(e) => setEntryEdit(e.target.value)}
                        value={entryEdit}
                      />
                    </label>
                    <label className="edit-item">
                      <p className="title-edit">TARGET 1 :</p>
                      <p className="title-edit">{statusPopup.item.target1}</p>
                      <img
                        src={iconRight}
                        className="icon-right"
                        alt="iconRight"
                      />
                      <input
                        className="input-focus"
                        onChange={(e) => setTarget1Edit(e.target.value)}
                        value={target1Edit}
                      />
                    </label>
                    <label className="edit-item">
                      <p className="title-edit">TARGET 2 :</p>
                      <p className="title-edit">{statusPopup.item.target2}</p>
                      <img
                        src={iconRight}
                        className="icon-right"
                        alt="iconRight"
                      />
                      <input
                        className="input-focus"
                        onChange={(e) => setTarget2Edit(e.target.value)}
                        value={target2Edit}
                      />
                    </label>
                    <label className="edit-item">
                      <p className="title-edit">MONEY :</p>
                      <p className="title-edit">{statusPopup.item.money}</p>
                      <img
                        src={iconRight}
                        className="icon-right"
                        alt="iconRight"
                      />
                      <input
                        className="input-focus"
                        onChange={(e) => setMoneyEdit(e.target.value)}
                        value={moneyEdit}
                      />
                    </label>
                    <label className="edit-item">
                      <p className="title-edit">VALUE BUY :</p>
                      <p className="title-edit">{statusPopup.item.valueBuy}</p>
                      <img
                        src={iconRight}
                        className="icon-right"
                        alt="iconRight"
                      />
                      <input
                        className="input-focus"
                        onChange={(e) => setValueBuyEdit(e.target.value)}
                        value={valueBuyEdit}
                      />
                    </label>
                  </div>
                </Fragment>
              )}
            </div>
            <div className="actionPopup">
              <div className="btn-success" onClick={confirm}>
                YES
              </div>
              <div className="btn-cancel" onClick={() => handlePopup(false)}>
                NO
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
