import React from "react";
export default function Friends({ selectHandler, friends, addFriend }) {
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

      <button id="add_Friend" onClick={addFriend}>
        Add Friend
      </button>
    </div>
  );
}
