import React from "react";
import { useState, useRef } from "react";
import { BsUpload } from "react-icons/bs";

export default function Friends({
  selectHandler,
  friends,
  addFriend,
  setShow,
  show,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState();
  const [name, setName] = useState("");
  const hiddenFileInput = useRef(null);

  // Image upload functions
  function handleChange(event) {
    const fileUploaded = event.target.files[0];
    setImg(URL.createObjectURL(fileUploaded));
  }
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  function onaddHandler() {
    const id = Date.now();
    const amount = 0;
    addFriend({ id, amount, name, img });
    setName("");
    setImg();
    setIsOpen(!isOpen);
  }
  console.log();
  return (
    <div id="friends_Container">
      {friends.length !== 0 ? (
        friends.map((friend) => {
          return (
            <ul className="friend" key={friend.id}>
              <li>
                <img
                  className="uploadImg"
                  src={friend.img || "https://dummyimage.com/50x50.gif"}
                  alt=""
                />
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
                <button
                  onClick={() => {
                    selectHandler(friend.id);
                    setIsOpen(!isOpen);
                  }}
                >
                  Select
                </button>
              </li>
            </ul>
          );
        })
      ) : (
        <h3 id="noDisplay">No friends to display.</h3>
      )}
      <button
        id="add_Friend"
        onClick={() => {
          if (show) setShow(!show);
          setIsOpen(!isOpen);
        }}
      >
        Add Friend
      </button>

      {isOpen && (
        <div className="friend" id="addFriend">
          <img
            className="uploadImg"
            src={img || `https://dummyimage.com/50x50.gif`}
            alt=""
          />
          <BsUpload id="upload" onClick={handleClick} />
          <input
            type="file"
            onChange={(e) => handleChange(e)}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => onaddHandler()}>Add</button>
        </div>
      )}
    </div>
  );
}
