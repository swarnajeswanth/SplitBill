import { React, useState } from "react";
import SplitBill from "./SplitBill";
import Friends from "./Friends";

export default function App() {
  const [show, setShow] = useState(false);
  const [friend, setFriend] = useState();
  const [friends, setFriends] = useState([]);

  function selectHandler(id) {
    setFriend(friends.find((f) => f.id === id));
    setShow(!show);
  }
  function updateAMT(value, paid, id) {
    console.log(value, paid, id);
    const updated = friends.map((f) => {
      if (paid === "You" && f.id === id) {
        f.amount -= value;
      }
      if (f.name === paid) {
        f.amount += value;
        return f;
      }
      return f;
    });
    setFriends(updated);
  }
  function addFriend({ id, amount, name, img }) {
    console.log(`App imgae ${img}`);
    const updatedFriends = [...friends, { id, img, name, amount: 0 }];
    setFriends(updatedFriends);
    console.log(friends);
  }
  return (
    <div id="Main_Container">
      <Friends
        selectHandler={selectHandler}
        friends={friends}
        addFriend={addFriend}
      />
      {show && <SplitBill friend={friend} updateAMT={updateAMT} />}
    </div>
  );
}
