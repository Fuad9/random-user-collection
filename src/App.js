import React, { useState } from "react";
import "./App.css";
import UserInfo from "./Component/UserInfo/UserInfo";
import UserCollection from "./Component/UserCollection/UserCollection";
import fakedata from "./fakedata";

function App() {
  const firstFifteen = fakedata.slice(0, 15);
  const [users, setUsers] = useState(firstFifteen);

  const [friends, setFriends] = useState([]);
  const handleAddFriend = (users) => {
    const newFriend = [...friends, users];
    setFriends(newFriend);
  };

  return (
    <div className="App">
      <h1>People You May Know</h1>
      <header className="App-header">
        <div>
          {users.map((user) => (
            <UserInfo
              user={user}
              key={user.name}
              handleAddFriend={handleAddFriend}
            ></UserInfo>
          ))}
        </div>
        <div className="user-collection">
          <h1>Friends Info</h1>
          <UserCollection friends={friends}></UserCollection>
        </div>
      </header>
    </div>
  );
}

export default App;
