import React, { useState } from "react";
export default function SplitBill({ friend, updateAMT }) {
  const [total, setTotal] = useState();
  const [paid, setPaid] = useState("You");
  console.log(friend);
  function billHandler(e) {
    e.preventDefault();
    updateAMT(Math.round(total / 2), paid, friend.id);
  }
  return (
    <div id="split_Container">
      <h2>SPLIT A BILL WITH {String(friend.name).toUpperCase()}</h2>
      <form id="bill_Container" onSubmit={(e) => billHandler(e)}>
        <ul className="bill_value">
          <li>💰 Bill Value</li>
          <li>
            <input
              type="text"
              value={total}
              placeholder="600..."
              onChange={(e) => setTotal(e.target.value)}
            />
          </li>
        </ul>

        <ul className="bill_value">
          <li> 🤑 Who is paying the bill</li>
          <li>
            <select
              option={paid}
              onChange={(e) => {
                setPaid(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="You" selected>
                You
              </option>
              <option value={friend.name}>{friend.name}</option>
            </select>
          </li>
        </ul>
        <button id="split_Bill">Spli Bill</button>
      </form>
    </div>
  );
}
