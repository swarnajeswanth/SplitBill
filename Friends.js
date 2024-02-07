import React from "react";
import { useState } from "react";
import { BsUpload } from "react-icons/bs";
export default function Friends({ selectHandler, friends, addFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  function onaddHandler() {
    const id = Date.now();
    const amount = 0;
    addFriend({ id, amount, name });
    setName("");
    setIsOpen(!isOpen);
  }
  return (
    <div id="friends_Container">
      {friends.map((friend) => {
        return (
          <ul className="friend" key={friend.id}>
            <li>
              <img src="https://dummyimage.com/50x50.gif" alt="" />
            </li>
            <li>
              {friend.name}
              <span
                className="message"
                style={
                  friend.amount === 0
                    ? { color: "lightgreen" }
                    : friend.amount < 0
                      ? { color: "red" }
                      : { color: "lightblue" }
                }
              >
                {friend.amount === 0
                  ? `You and ${friend.name} are Even`
                  : friend.amount < 0
                    ? `${friend.name} owes you ${Math.abs(friend.amount)}`
                    : `You owe ${friend.name} ${friend.amount}`}
              </span>
            </li>
            <li>
              <button onClick={() => selectHandler(friend.id)}>Select</button>
            </li>
          </ul>
        );
      })}
      <button id="add_Friend" onClick={() => setIsOpen(!isOpen)}>
        Add Friend
      </button>
      {isOpen && (
        <div className="friend" id="addFriend">
          <img src="https://dummyimage.com/50x50.gif" alt="" />
          <BsUpload id="upload" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={onaddHandler}>Add</button>
        </div>
      )}
    </div>
  );
}
