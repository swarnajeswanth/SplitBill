import { React, useState } from "react";
import SplitBill from "./SplitBill";
import Friends from "./Friends";

export default function App() {
  const [show, setShow] = useState(false);
  const [friend, setFriend] = useState();
  const [friends, setFriends] = useState([
    { id: 1, img: "", name: "Jeswanth", amount: 120 },
    { id: 2, img: "", name: "Susan", amount: 100 },
    { id: 3, img: "", name: "Asif", amount: -1500 },
    { id: 4, img: "", name: "Penchal", amount: 0 },
    { id: 5, img: "", name: "Chakri", amount: -2000 },
  ]);

  function selectHandler(id) {
    setFriend(friends[id - 1]);
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
  function addFriend() {}
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
